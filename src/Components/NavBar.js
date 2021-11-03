import CryptoCategories from "./mainComps/CryptoCategories";
import { Switch, Route, Link } from "react-router-dom";
import { useRef, useState } from "react";
import store from '../store';

const NavBar = () =>{
    const pagenumArr = ['Top 100', '200-300', '300-400', '400-500', '500-600']
    const CurrencyArr = ['USD', 'AUD','EUR','CAD', 'CNY', 'INR' ]
    const [pageMenuText, setPageMenuText] = useState('Top 100')
    const [curMenuText, setCurMenuText] = useState('usd')

    const handlePageNum = (index) => {
      store.dispatch({type: 'changeRank', rank: (index+1)});
      setPageMenuText(pagenumArr[index]);
      console.log(pageMenuText);
    }
    const handleCurrencyChange = (index) => {
      store.dispatch({type: 'changeCurrency', currency: CurrencyArr[index].toLowerCase()});
      setCurMenuText(CurrencyArr[index]);
      console.log(CurrencyArr);
    }

    return(
        <nav>
      <div class="logo">
        <Link to = "/">
        <img src="logo_1.png"/>
        <div class="header">
          <h1>CryptoWatch</h1><br/>
        <small>One place for market Insights</small>
        
      </div>
      </Link>
      </div>
      <div class="menu">
        <ul>
          <li class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                {pageMenuText}
              </button>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                {pagenumArr.map((value,index) => 
                (<li onClick = {() => handlePageNum(index)}>
                  <a class="dropdown-item" href="#">{value}</a>
                  </li>)
                  )
                }
              </ul>
          </li>
          <li class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                {curMenuText}
              </button>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
              {CurrencyArr.map((value,index) => 
                (<li onClick = {() => handleCurrencyChange(index)}>
                  <a class="dropdown-item" href="#">{value}</a>
                  </li>)
                  )
                }
              </ul>
          </li>
          <li><button>Donate</button></li>
        </ul>
      </div>
    </nav>
    );
}

export default NavBar;