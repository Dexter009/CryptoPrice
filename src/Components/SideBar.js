import React from 'react';
import cryptoNews from './SideBar/cryptoNews';
import FearAndGreedIndex from './SideBar/FearAndGreedIndex';
import TrendingCoin from './SideBar/TrendingCoin';

const SideBar = () => {
    return(
       <> 
        <FearAndGreedIndex />
        <TrendingCoin />

        </>
    )
}

export default SideBar;