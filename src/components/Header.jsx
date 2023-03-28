import ConnectButton from "./ConnectButton";
export default function Header(){
    return(
        <div className="header">  
                <h2 className="brand">Some dapp name</h2>  
                    <ConnectButton/>    
        </div>
    )
}