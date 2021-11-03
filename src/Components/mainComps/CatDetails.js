import React, { useEffect, useRef } from 'react';
import '../../styles.css';
import CryptoInfo from './CryptoInfo.js';
import { CatDetail } from '../../api';

const CatDetails = props =>{
    const[catCoins,setCatCoins] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const[showInfo, setshowInfo] = React.useState(false);
    const[coinId, setcoinId] = React.useState();

    const CateUpdate = async () => {
      setCatCoins(await CatDetail(props.catId));
      setLoading(true);
                        }   
    useEffect(() =>{
        
        CateUpdate();
    },[]);

    return(
    <>
    {
            loading &&
            catCoins.map(catcoins => (
              <div onClick = {() => {setcoinId(catcoins.id);setshowInfo(true);}}>     
               <div key = {catcoins.id} className = {catcoins.price_change_percentage_1h_in_currency >= 0 ? "price-card" : "price-card red-shadow"}>
               
               <img src = {catcoins.image} />
               <p>{catcoins.symbol}<br/>
               {catcoins.current_price}
               </p>
               </div>
              </div>
            ))
            }
            
            {showInfo && <CryptoInfo id={coinId} onShowInfo = {setshowInfo}/>}
            {console.log("App.js rendered")}
            </>
        );
}

export default CatDetails;