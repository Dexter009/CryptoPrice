import React, { useEffect, useState } from "react";
import CryptoInfo from "../mainComps/CryptoInfo";
import { TrendUpdate } from "../../api";
const TrendingCoin = () => {
    const [trending,setTrending] = useState([]);
    const[showInfo, setshowInfo] = React.useState(false);
    const[coinId, setcoinId] = React.useState();
    const TrendUpdt = async () =>{
        setTrending(await TrendUpdate());
    }
    useEffect(TrendUpdt,[]);

    return(
        <div className = "trending">
            <h1> Trending </h1>
            <ul>
            {trending.map(trendCoin => (
                <li className = "trending-item" onClick = {() => {setcoinId(trendCoin.item.id);setshowInfo(true);}}>
                    <img src = {trendCoin.item.small} />
                    <div>
                        {trendCoin.item.id}<br />
                        Market Cap Rank: {trendCoin.item.market_cap_rank}
                    </div>
                </li>
            ))}
            </ul>
            {showInfo && <CryptoInfo id={coinId} onShowInfo = {setshowInfo}/>}
        </div>
    );
}

export default TrendingCoin;