import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

const ConnectButton = () => {
  const [wallet, setWallet] = useState(null);
  const [connectedAddress, setConnectedAddress] = useState(null)
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    // Retrieve wallet from local storage, if it exists
    const storedWallet = localStorage.getItem('wallet');
    if (storedWallet) {
      setWallet(storedWallet);
    }
  }, []);

  const connectWallet = async () => {
    console.log(connected)
    if(connected === false){
        // Connect the wallet
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress().then((value) => {setConnectedAddress(value)});
        
        console.log(address)
        // Save the wallet to local storage
        localStorage.setItem('wallet', address);

        // Update state
        setWallet(address);
        setConnected(true)
        connectedAddress(address)

        console.log(connectedAddress)
    }else{
      console.log("install MM")
    }
  };

  const disconnectWallet = () => {
    // Remove the wallet from local storage
    localStorage.removeItem('wallet');
    setConnected(false)
    // Update state
    setWallet(null);
  };

  // Render the component
  return (
    <div>
      {wallet ? (
        <button onClick={disconnectWallet}>Disconnect Wallet</button>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};


// import { ethers } from "ethers";
// import { useState } from "react";

// const ConnectButton = () => {
   
//     const [provider, setProvider] = useState(null)
//     const [address, setAddress] = useState(null);
//     const [connected, setConnected] = useState(false)
    
//     const connectWallet = async() =>{
//         if(connected === true){
//             console.log("connected already")
//             alert("already connected")
//             return
//         }
//         if(window.ethereum){
//             // Initialize a new Web3Provider object
//             const provider = new ethers.providers.Web3Provider(window.ethereum)
//             console.log(provider)
//             provider.send('eth_requestAccounts', []);
//             // Get the signer and address from the provider
//             const signer = provider.getSigner();
//             console.log(signer)
//             const address = await signer.getAddress().then((value) => {setAddress(value)});
//             console.log(address)
//             setAddress(address)
//             setProvider(provider);
//             setConnected(true)
//         }
//         else {
//             console.log('Please install MetaMask or another web3 wallet');
//           }
//     }

    
//     return(
//         <button className="connect-button"
//         onClick={() => {connectWallet()}}
//         disabled={address !== null}
//         >
//             {        
//                 connected ?
//                 `${address.slice(0,4)}...${address.slice(address.length - 4, address.length)} `
//                 : `Connect wallet`      
//             }
//         </button>
//     )
// }

export default ConnectButton