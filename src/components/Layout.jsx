import { Web3Provider } from '../Web3Provider';
import Content from "./Content";
import Header from "./Header";

export default function Layout() {
    return(
        <div className="page-wrapper">
            <Web3Provider>
                <Header/>
                <Content/>
            </Web3Provider>
        </div>
    )
}