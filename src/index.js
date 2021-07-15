import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import "./css/custom.css";
import { BrowserRouter, HashRouter, MemoryRouter } from "react-router-dom";
import $ from 'jquery';
import Screenfull from "./sa-fullscreen"


//Component
import Routes from "./routes";




const App = () => {
    
        return(
          <>
          <Screenfull/>
          <BrowserRouter basename={window.location.pathname}>
            <Routes/>
          </BrowserRouter>
          </>
        )
    
}





ReactDOM.render(
  <App/>,
  document.getElementById('root')
);


