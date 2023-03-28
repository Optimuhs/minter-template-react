import MintButton from "./MintButton";

export default function Content(){   
    
    return(
        <div className="content-wrapper">
            <section className="mint-section">
                <h3 className="mint-header">Mint our project today!</h3>
                <ul className="mint-info">
                    <li>One reason to mint</li>
                    <li>Another reason to mint but longer</li>
                    <li>Yet another reasoan to mint but a bit longer than the previous one</li>
                </ul>
            </section>
            <MintButton/>
           
        </div>
    )
}