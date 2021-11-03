
import './styles.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PriceContainer from './Components/mainComps/PriceContainer';
import CryptoCategories from './Components/mainComps/CryptoCategories';
import SearchComponent from './Components/SearchComp/SearchComponent';
import CryptoNews from './Components/SideBar/cryptoNews';
import SideBar from './Components/SideBar';
import store from './store';



const App = () => {
  console.log("Main app rendered");

  return(
    <div className= "container">
    <div className = "option">
       <button className = "btn btn-dark" onClick = {() => store.dispatch({type:'changeTime',toggleTime:0})}>1Hr</button>
       <button className = "btn btn-dark" onClick = {() => store.dispatch({type:'changeTime',toggleTime:1})}>24Hr</button>
       <button className = "btn btn-dark" onClick = {() => store.dispatch({type:'changeTime',toggleTime:2})}>14D</button>
       <button className = "btn btn-dark" onClick = {() => store.dispatch({type:'changeTime',toggleTime:3})}>30D</button>
     </div>
     <Switch>
     <div className = "main">
      <Route path="/" component={() => <PriceContainer />} exact />
      
      </div>
      </Switch>
      <div className = "wrapper">
        <div className = "sidebar">
          <SideBar />
          <CryptoNews />
        </div>
        <div className = "section-search">
          <SearchComponent />
          <CryptoCategories />
        </div>
          
      </div>
    
    </div>

    
    
  );
}
export default App;
