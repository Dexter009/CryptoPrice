import React, { useEffect, useState } from "react";
import { UpdateNews } from "../../api";

const CryptoNews = () =>{
    const [news,setNews] = useState();
    const [loading, setLoading] = useState(false)

    const NewsUpdate = async () => {
        setNews(await UpdateNews());
        setLoading(true);
    }
    useEffect(NewsUpdate,[]);
    return(
        <div className = "news-wrapper">
            <h1>Top News </h1>
            <hr />
                {loading && news.results.map((x, index)=>
                    index < 10 &&
                        <div className = "news-item">
                        <a href = {""+x.url} target="_blank">
                        <div>{x.title}</div>
                        <p>{x.created_at}</p>
                        </a>
                        </div>
                    )}
        </div>
    );
}

export default CryptoNews;