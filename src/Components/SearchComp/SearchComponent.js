import { React, useEffect, useRef, useState } from 'react';
import { SearchUpdate, } from '../../api';

const SearchComponent = () =>{
    const [inputChange, setInputChange] = useState('');
    const [searchCoin, setsearchCoins] = useState();
    const [loading, setLoading] = useState(false);    
    const SearcHead = useRef();
    
    const PriceUpdate = async () => {
                                    let data = await SearchUpdate();
                                    setsearchCoins(data.flat());
                                    console.log(searchCoin);
                                    setLoading(true);
                                }
    if (searchCoin == undefined) {   
    setTimeout(() =>PriceUpdate(),6000);}
    useEffect(() => {
        
                    setLoading(false);
                    PriceUpdate();
                    loading && console.log("the coins areS",searchCoin,loading);
                },[inputChange]);

    const handleChange = (event) => {
        console.log(inputChange);
        SearcHead.current.value = "Search  CryptoCurrency"
        console.log(SearcHead);
        setInputChange(event.target.value);

    }
    const checkValue = val => parseInt(val) > 0 ? "btn-success": "btn-danger";
    const makeToFixed = val => {if (val != null){
                                return val.toFixed(2);}}
    
    return(
        <div className = "search">
            <h1>Search By Coins</h1>
            <div className = "searchbox">
                <div className = "searchbox-header" ref = {SearcHead}></div>
                <input type = "text" placeholder = "search cryptocurrency" onChange = {handleChange}/>
            </div>
            <div className = "searchResult">
               <table className = "table table-dark">
                    <thead>
                        <tr>
                            <th>#Rank</th>
                            <th>Name</th>
                            <th>Market Cap</th>
                            <th>Current Price</th>
                            <th>1hr</th>
                            <th>24hr</th>
                            <th>1 Week</th>
                            <th>1 Month</th>
                        </tr>
                    </thead>
                    <tbody>
                    {inputChange == '' ? 
                    loading && searchCoin.sort(function (a, b) {
                        return parseInt(b.price_change_percentage_24h_in_currency) - parseInt(a.price_change_percentage_24h_in_currency);
                      }).map((coins,index) => (
                        index <20 &&
                            <tr>
                                <td>{coins.market_cap_rank}</td>
                                <td>{coins.name}</td>
                                <td>{coins.market_cap}</td>
                                <td>{coins.current_price}</td>
                                <td className = {checkValue(coins.price_change_percentage_1h_in_currency)}>
                                        {makeToFixed(coins.price_change_percentage_1h_in_currency)}</td>
                                <td className = {checkValue(coins.price_change_percentage_24h_in_currency)}>{makeToFixed(coins.price_change_percentage_24h_in_currency)}</td>
                                <td className = {checkValue(coins.price_change_percentage_7d_in_currency)}>{makeToFixed(coins.price_change_percentage_7d_in_currency)}</td>
                                <td className = {checkValue(coins.price_change_percentage_30d_in_currency)}>{makeToFixed(coins.price_change_percentage_30d_in_currency)}</td>
                            </tr>    
        )) :loading && searchCoin.sort(function (a, b) {
            return parseInt(a.market_cap_rank) - parseInt(b.market_cap_rank);
          }).filter(coins => coins.name.toLowerCase().startsWith(inputChange)).map(coins => (
                            <tr>
                                <td>{coins.market_cap_rank}</td>
                                <td>{coins.name}</td>
                                <td>{coins.market_cap}</td>
                                <td>{coins.current_price}</td>
                                <td className = {checkValue(coins.price_change_percentage_1h_in_currency)}>
                                        {makeToFixed(coins.price_change_percentage_1h_in_currency)}</td>
                                <td className = {checkValue(coins.price_change_percentage_24h_in_currency)}>{makeToFixed(coins.price_change_percentage_24h_in_currency)}</td>
                                <td className = {checkValue(coins.price_change_percentage_7d_in_currency)}>{makeToFixed(coins.price_change_percentage_7d_in_currency)}</td>
                                <td className = {checkValue(coins.price_change_percentage_30d_in_currency)}>{makeToFixed(coins.price_change_percentage_30d_in_currency)}</td>
                            </tr>    
        ))} 
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchComponent;