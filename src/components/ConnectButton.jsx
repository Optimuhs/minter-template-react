import React from 'react';
import { useWeb3Context } from '../Web3Provider';

export default function WalletButton() {
  const { provider } = useWeb3Context();

  const handleConnect = async () => {
    const { ethereum } = window;
    if (ethereum) {
      try {
        await ethereum.request({ method: 'eth_requestAccounts' });
        provider.getSigner();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <button onClick={handleConnect}>
      Connect to Wallet
    </button>
  );
}

// import { ethers } from 'ethers';
// import { useContext, useState } from 'react';
// import { WalletContext } from "/Users/optimuhs/dev/dev-templates/react-web3-template/react-minter-template/src/WalletContext.js";


// const ConnectButton = () => {
//   const [walletAddress, setWalletAddress] = useState(null);
//   const [wallet, setWallet] = useState({ address: null, signer: null });
//   const walletContext = useContext(WalletContext);
  
//   // useEffect(() => {
//   //   const storedWalletAddress = localStorage.getItem('walletAddress');
//   //   if (storedWalletAddress) {
//   //     setWalletAddress(storedWalletAddress);
//   //   }
//   // }, []);

//   const ConnectWallet = async () => {
    
//       try {
//         // await window.ethereum.request({ method: 'eth_requestAccounts' });
//         const [account] = await window.ethereum.request({
//           method: "eth_requestAccounts",
//         });
//         const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
//         const signer = provider.getSigner();
//         setWallet({ address: account, signer });
//         const address = await signer.getAddress();
//         setWalletAddress(address);
        
//         // Set wallet context with address and balance
//         walletContext.setWalletAddress(account);
//         walletContext.setWallet({address:account, signer:signer})

//       } catch (error) {
//         console.error(error);
//       }
//   };

//   const DisconnectWallet = () => {
//     setWalletAddress(null);
//     walletContext.address = "";
//     // localStorage.removeItem('walletAddress');
//   };

//   return (
//     <div className='button-wrapper'>
//       {walletAddress ? (
//         <button onClick={DisconnectWallet} className='connect-button'>{
//           `${walletAddress.slice(0,4)}...${walletAddress.slice(walletAddress.length - 4, walletAddress.length)}`
//           }</button>
//       ) : (
//         <button onClick={ConnectWallet} className='connect-button'>Connect Wallet</button>
//       )}
//     </div>
//   );
// };

// export default ConnectButton