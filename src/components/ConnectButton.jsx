import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

const ConnectButton = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    const storedWalletAddress = localStorage.getItem('walletAddress');
    if (storedWalletAddress) {
      setWalletAddress(storedWalletAddress);
    }
  }, []);

  const connectWallet = async () => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      const signer = provider.getSigner();
      console.log(signer)
      const address = await signer.getAddress();
      setWalletAddress(address);
      localStorage.setItem('walletAddress', address);
    } catch (error) {
      console.error(error);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    localStorage.removeItem('walletAddress');
  };

  return (
    <div>
      {walletAddress ? (
        <button onClick={disconnectWallet}>{
          `${walletAddress.slice(0,4)}...${walletAddress.slice(walletAddress.length - 4, walletAddress.length)}`
          }</button>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default ConnectButton