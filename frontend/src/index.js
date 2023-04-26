import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';
const root = ReactDOM.createRoot(document.getElementById('root'));


Kommunicate.init("2d1d17d59825d0256fa45fac3fce68ed7" )
root.render(
  // <React.StrictMode>
     <Router>
      <App />
    </Router>
  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
