import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { app } from './utilities/firebase';
// import { AuthProvider } from './Context/AuthContext';
// import { Context } from './Context/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <Context> */}
    
    <BrowserRouter app={app}>
    <App/>
    </BrowserRouter>
    {/* </Context> */}
  </React.StrictMode>
);
