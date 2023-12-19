import {Suspense, useEffect, useState} from "react";
import './App.css';
import Layout from "./components/Layout/Layout.jsx";
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.js';
import React from 'react';
import Loading from "./pages/Loading/Loading.jsx";



function App() {

  // const [show, setShow] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShow(true);
  //   }, 5000);
  // }, []);

  return (
    <Suspense fallback={<Loading/>} >
      <div className="App">
      <Cursor isGelly={true} cursorSize={20} cursorBackgrounColor="#f3c623" exclusionBackgroundColor="#10316b" />
     <Layout/>
     <ScrollToTop/>
    </div>
    </Suspense>
    
    
  );
}

export default App;

