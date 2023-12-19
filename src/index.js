import React, { Suspense } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "./i18n.js";
import './index.css';
import App from './App';
import Loading from "./pages/Loading/Loading.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </BrowserRouter>
    
  </React.StrictMode>
);


