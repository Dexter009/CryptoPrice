import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const Footer = () => {

    return(
        
        <div className = "footer">
            <hr />
            <div className = "row">
                <div className = "col-md-6 col-sm-12">
                    <div class="logo">
                        <Link to = "/">
                        <img src="logo_1.png"/>
                            <div class="header">
                                <h1>CryptoWatch</h1><br/>
                                <small>One place for market Insights</small>    
                            </div>

                    </Link>
                    </div>
                </div>
                <div className = "col-md-6 col-sm-12">
                    <div className = "footer-icons">
                        <a href = "https://twitter.com/DGazurel" target = "_blank"><i class="bi bi-twitter"></i></a>
                        <a href = "https://github.com/Dexter009" target = "_blank"><i class="bi bi-github"></i></a>
                        <a href = "https://www.linkedin.com/in/dhiraz-gazurel/" target = "_blank"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;