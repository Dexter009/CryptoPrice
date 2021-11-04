import React, { createRef, useRef } from 'react';
import { createChart, CrosshairMode } from 'lightweight-charts';
import Draggable, {DraggableCore} from 'react-draggable';
import { InfoUpdate } from '../../api'; 

const CryptoInfo = ({id,onShowInfo}) =>{
    console.log("cryptoinfo rendered");
    // refs and states
    const chartContainerRef = useRef();
    
    const[coinInfo, setcoinInfo] = React.useState({});    
    const[loadingStatus, setLoading] = React.useState(false);
    const[chartData, setchartData] = React.useState(false);
    const[chartTime, setchartTime] = React.useState(1);
    
    
    const pricefetch = async () => {
      setcoinInfo(await InfoUpdate(id));
      setLoading(true);
    }
    

    const ChartFetch = () => {fetch('https://api.coingecko.com/api/v3/coins/'+id+'/ohlc?vs_currency=aud&days='+chartTime)
                                .then(res => res.json())
                                .then(resdata =>{
                                  let candleArr = [];
                                  for(let i=0; i < resdata.length; i++){
                                      let ohlcobject = {'time':'','open': 0, 'high': 0, 'low': 0, 'close': 0};
                                      ohlcobject['time'] = (resdata[i][0]/1000);
                                      ohlcobject['open'] = resdata[i][1];
                                      ohlcobject['high'] = resdata[i][2];
                                      ohlcobject['low'] = resdata[i][3];
                                      ohlcobject['close'] = resdata[i][4];
                                      candleArr.push(ohlcobject);    
                                  }
                                  chartContainerRef.current.innerHTML = '';
                                const chart = createChart(chartContainerRef.current, { 
                                    width: 600,
                                    height: 400,
                                    
                                    layout: {
                                        backgroundColor: '#253248',
                                        textColor: 'rgba(255, 255, 255, 0.9)',
                                      },
                                      grid: {
                                        vertLines: {
                                          color: '#334158',
                                        },
                                        horzLines: {
                                          color: '#334158',
                                        },
                                      },
                                      crosshair: {
                                        mode: CrosshairMode.Normal,
                                      },
                                      priceScale: {
                                        borderColor: '#485c7b',
                                        autoScale: true,
                                      },
                                      timeScale: {
                                        borderColor: '#485c7b',
                                        timeVisible:true,
                                        autoscale: true,
                                      },
                                 });
                                 chart.timeScale().fitContent();
                                 var candleSeries = chart.addCandlestickSeries({
                                    upColor: '#00ff00',
                                    downColor: '#ff0000',
                                    borderDownColor: 'rgba(255, 144, 0, 1)',
                                    borderUpColor: 'rgba(255, 144, 0, 1)',
                                    wickDownColor: 'rgba(255, 144, 0, 1)',
                                    wickUpColor: 'rgba(255, 144, 0, 1)',
                                  });

                                  candleSeries.setData(candleArr);})}
    React.useEffect(() => {
        pricefetch();

        console.log(chartContainerRef);

        chartData && ChartFetch();
    },[id, chartData, chartTime]);

    
    return(
      <Draggable cancel=".close">
        <div className = "info-card">
            
            <div className = "info-header">
                <button className = "close" onClick = {() => onShowInfo(false)}>X</button>
                <h1>{coinInfo.name}</h1>
                <button onClick = {() => setchartData(!chartData)}>Charts</button>
            </div>
            
            {loadingStatus &&
            
            <div className = "info-main">
                <pre>
                <p>Name : {coinInfo.name}</p>
                <p>Rank : #{coinInfo.market_cap_rank}</p>
                <p>Volume : AU{coinInfo.market_data.total_volume.aud}</p>
                <p>market_cap : AU{coinInfo.market_data.market_cap.aud}</p>
                <p>Price : AU{coinInfo.market_data.current_price.aud}</p>
                </pre>
            </div>
          } 
          
            <div className = "info-chart">
              {chartData && <div class = "chart-wrapper" ref={chartContainerRef} ></div>}
               
              {chartData && <div className = "charts-time">
                <button className = "btn btn-light" onClick = {() => {setchartTime(1);}}>1</button>
                <button className = "btn btn-light" onClick = {() => {setchartTime(7);}}>7</button>
                <button className = "btn btn-light" onClick = {() => {setchartTime(14);}}>14</button>
                <button className = "btn btn-light" onClick = {() => {setchartTime(30);}}>30</button>
                <button className = "btn btn-light" onClick = {() => {setchartTime(180);}}>180</button>
                <button className = "btn btn-light" onClick = {() => {setchartTime(365);}}>365</button>
              </div>}
            </div>
                         <div className = "info-indicators"></div>
        
         </div>
         </Draggable>                 
        );

}


export default CryptoInfo;