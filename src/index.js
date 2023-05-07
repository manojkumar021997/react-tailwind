import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { app } from './utilities/firebase';
import Context from './Context/userContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
    <BrowserRouter app={app}>
    <App/>
    </BrowserRouter>
    </Context>
  </React.StrictMode>
);
