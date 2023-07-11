import React from 'react';
import ReactDOM from 'react-dom/client';
import {Toaster} from "react-hot-toast";
import App from './App';
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Toaster></Toaster>
  </React.StrictMode>
);


 