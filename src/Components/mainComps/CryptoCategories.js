import '../../styles.css';
import React, { useRef, useState } from 'react';
import CatDetails from './CatDetails';
import { CatUpdate } from '../../api';


const CryptoCategories = () =>{
    // refs
    const mainRef = useRef();
    // states
    const [catData,setcatData] = React.useState([]);

    const [catID,setcatID] = React.useState('');
    const [catDetails,setCatDetails] = React.useState(false);
    const [loading, setLoading] = useState(false)
    // fetching
    const CatFetch = async () =>{
        setcatData(await CatUpdate());
        setLoading(true);
    }

    const getMarketCap = () => {
      let count = 0.0;
      let totalMarketCap = catData.map(cData => count += cData.market_cap);
      return totalMarketCap[totalMarketCap.length - 1];
    }
    
    React.useEffect(() =>{
                    CatFetch();
                    loading && getMarketCap();
                    setCatDetails(false);
    },[]);
    
    return(
      
        <div className = "cat-main" ref= {mainRef}>
          <div className = "cat-header">
            <h1>Search By Categories</h1>
            {catDetails && <button className = "btn btn-primary" onClick = {()=>setCatDetails(false)}>Categories</button>}
          </div>
          {catDetails == false? 
          loading && catData.map(catData => (
            <div className = "cat-card-wrapper"onClick = {() => {setcatID(catData.id);console.log(catID);setCatDetails(true);}}>     
            <CatCard hoverable
            name={catData.name}
            market_cap={catData.market_cap}
            id = {catData.id}
            volume_24h = {catData.volume_24h}
            market_cap_change_24h = {catData.market_cap_change_24h}
            totalMarketCap = {getMarketCap()}
            />
            </div>

     )):
     <CatDetails catId = {catID} />}
     
     </div>
    );
}
const CatCard = props =>{
    return(
      <div key = {props.id} className = {props.market_cap_change_24h >= 0 ? "cat-card" : "cat-card cat-red-shadow"} >
        

        <p>{props.name}<br/>
        </p>
      </div>

    );
   }
export default CryptoCategories;