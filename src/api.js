
//  For PriceCointainer
const PriceUpdate = async (currency,pagenumb) => {
    const pArr =  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency='+currency+'&order=market_cap_desc&per_page=108&page='+pagenumb+'&sparkline=false&price_change_percentage=1h%2C24h%2C14d%2C30d')
    .then(response => response.json())
    .then(data => {return data})
    return pArr;
}
// For crypto Info Component

const InfoUpdate = async (id) =>{
return fetch('https://api.coingecko.com/api/v3/coins/'+id+'?localization=en&market_data=true&sparkline=true')
.then(res => res.json())
.then(data => {console.log(data);return data})
}

// FNG index
const FngUpdate = async () => {
   return fetch('https://api.alternative.me/fng/')
   .then(res => res.json())
   .then(data => {return data})
}
// searchUpdate
let searchArr = new Array();
const SearchUpdates = async() => {
   for(let i = 1; i< 15; i++){
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=AUD&order=market_cap_desc&per_page=250&page='+i+'&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d')
       .then(res => res.json())
       .then(data => {searchArr.push(data);})      
   }
   return searchArr;
}
SearchUpdates();
setInterval(() => {searchArr = [];SearchUpdates();},5000);

const SearchUpdate = async () => {
   return searchArr;
}
// Trending
const TrendUpdate = async () =>{
   return fetch('https://api.coingecko.com/api/v3/search/trending')
   .then(res => res.json())
   .then(data => {console.log(data);return data.coins})
}
// Categories
const CatUpdate = async () => {
   return fetch('https://api.coingecko.com/api/v3/coins/categories')
        .then(res => res.json())
        .then(data => {return data})
}

// INDIVIDUAL Category

const CatDetail = async (catId) =>{
   return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&category='+catId+'&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C14d%2C30d')
   .then(res => res.json())
   .then(data =>{return data;})
}

// NewsUpdate
const APIKEY = '72d821f774bd40cc99dd31ab854dac8dcee15542'
const UpdateNews = async () =>{
   return fetch('https://cryptopanic.com/api/v1/posts/?auth_token='+APIKEY+'&public=true')
   .then(res => res.json())
   .then(data => {console.log(data);return data;})
}

export {PriceUpdate, InfoUpdate, FngUpdate, SearchUpdate, SearchUpdates, TrendUpdate, CatUpdate, CatDetail, UpdateNews}
