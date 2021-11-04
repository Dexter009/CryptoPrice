import React, { useEffect, useState } from 'react';
import { FngUpdate } from '../../api';
const FearAndGreedIndex = () =>{


    const[fng, setfng] = useState([]);
    const [loading, setLoading] = useState(false);
    const UpdateFNG = async () => {
        setfng(await FngUpdate());
        setLoading(true);
    }    
    useEffect(() => UpdateFNG(),[]);
    const findColor = (val) => {
        let value = parseInt(val);
        
        switch(true){
        
        case (value <= 35):
           
            return "fngfear";
        case (value > 35 && value <= 65):
            
            return "fngneutral"
        
        case (value > 65):
            
            return "fnggreed";
        default:
            return "";
    
        }
    }
    const updateValue = (sec) =>
        {
            let val = parseInt(sec);
            let hours = parseInt(val/ 3600);
            // let mins = parseInt((val/ 60) - hours * 60);
            // let seconds = parseInt(val - hours * 3600 - mins * 60) ;
            return ""+hours+" Hours"  ;                 
    }
    
    return(
        <div className = "fng-index">
            <div className = "fng-header">
                <img src = "Bitcoin_logo.png"/>
                <div><h4> Fear and Greed Index</h4></div>
                
            </div>
            <div class = "label">By alternative.me</div>
            <hr />
            {console.log(fng)}
            {loading &&<div className = "fng-body">
                <p>Index: <span className = {String(findColor(fng.data[0].value))}>{fng.data[0].value}<br />
                {fng.data[0].value_classification}</span></p>
            </div>}
            <div className = "fng-footer">
            {loading && <p>Time until update  -  {updateValue(fng.data[0].time_until_update)}
                </p>}
            </div>
        </div>
    );
}

export default FearAndGreedIndex;