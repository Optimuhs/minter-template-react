import { ethers } from 'ethers';
import { createContext, useContext, useEffect, useState } from 'react';

const Web3Context = createContext();

export function useWeb3Context() {
  return useContext(Web3Context);
}

export function Web3Provider({ children }) {
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const init = async () => {
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      await window.ethereum.enable();
      const signer = web3Provider.getSigner();
      const userAddress = await signer.getAddress();
      setProvider(web3Provider);
      setAddress(userAddress);
    };

    if (window.ethereum) {
      init();
    }
  }, []);

  return (
    <Web3Context.Provider value={{ provider, address }}>
      {children}
    </Web3Context.Provider>
  );
}
