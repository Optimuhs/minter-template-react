import { useContext } from "react";
import { useWeb3Context } from "../Web3Provider";

const MintButton = () => {
    const { provider } = useContext(useWeb3Context);
    async function MintCall(){

        console.log(provider)
    }

    return (
        <div className="mint-button-wrapper">
            <button className="mint-button"
                onClick={() => MintCall()}
            >Mint Now!</button>
        </div>
    )
}

export default MintButton;

