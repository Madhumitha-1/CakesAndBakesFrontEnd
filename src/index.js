import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Login from './components/Login';
import './Login.css';
import Register from './components/Register';
import './Register1.css'   ;
import { BrowserRouter} from "react-router-dom";

import Footer from './components/Footer';
import Page from './components/Page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode> 
   <App/>
       
      
   
  </React.StrictMode> 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
