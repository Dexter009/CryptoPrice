import '../../styles.css';
import React, { useContext, useState } from 'react';
import CryptoInfo from './CryptoInfo.js';
import store from '../../store';
import { PriceUpdate } from '../../api';

const PriceContainer = () => {

 // states
 const[coins, setCoins] = React.useState([]);
 const[showInfo, setshowInfo] = React.useState(false);
 const[coinId, setcoinId] = React.useState();
 const[choices, setChoices] = useState(
                      {
                        'pagenum':1,
                        'currency':'usd',
                        'toggleTime':0,
                    });

store.subscribe(() => { let pagenum = store.getState().pagenum.rank;
                        let currency = store.getState().pagenum.currency;
                        let toggleTime = store.getState().pagenum.toggleTime;
                      setChoices({'pagenum':pagenum,'currency':currency, 'toggleTime':toggleTime});
                      console.log(choices)
                    });
                      
 const Pupdate = async () => {
  setCoins(await PriceUpdate(choices.currency,choices.pagenum))
 }

 React.useEffect(()=>{
   Pupdate();
    },[choices.currency,choices.pagenum]);

 let newArr = new Array();
 return (

     <>

     {coins.map(coins => (
       <div key = {coins.id} onClick = {() => {setcoinId(coins.id);setshowInfo(true);}}>     
        <div className = {newArr[choices.toggleTime] >= 0 ? "price-card" : "price-card red-shadow"}>
        
        <img src = {coins.image} />
        <p>{coins.symbol}<br/>
        {coins.current_price}
        </p>
        </div>

       <p className = "hidden">{newArr = [coins.price_change_percentage_1h_in_currency,
         coins.price_change_percentage_24h_in_currency,coins.price_change_percentage_14d_in_currency,coins.price_change_percentage_30d_in_currency]}</p>
        
       </div>
     ))
     }
     
     {showInfo && <CryptoInfo id={coinId} onShowInfo = {setshowInfo}/>}
     {console.log("App.js rendered")}
     </>
 );
}


export default PriceContainer;