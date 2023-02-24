import { useEffect, useState } from "react";
import "../index.css";
export default function ConnectButton(){

    const [connectedWallet, setConnected] = useState("");
    useEffect()


    return(
        <button className="connect-button">
            Connect Wallet
        </button>
    )
}