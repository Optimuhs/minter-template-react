
import { useEffect, useState } from "react";
import "../index.css";
const ethers = require("ethers");

export default function ConnectButton(){

    const [address, setAddress] = useState(null);

    useEffect(() => {
    // Initialize a new Web3Provider object
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get the signer and address from the provider
    const signer = provider.getSigner();
    const address = signer.getAddress();

    // Update the component's state with the user's address
    setAddress(address);

    // Clean up the provider when the component unmounts
    return () => {
        provider.removeAllListeners();
        provider.disconnect();
    };
    }, []);


    return(
        <button className="connect-button">
            Connect Wallet {address}
        </button>
    )
}