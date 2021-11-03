import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import store from './store';

const rend = () =>{
  ReactDOM.render(
            <React.StrictMode>
              <HashRouter>
                  <NavBar />
                  <App />
                  <Footer />
              </HashRouter>
            </React.StrictMode>,
  document.getElementById('root')
  );
}
rend();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
