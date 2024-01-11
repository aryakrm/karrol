import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.js";
import Loading from "./pages/Loading/Loading.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 3-second loading time
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      // Cleanup the timeout to avoid potential memory leaks
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Cursor
            isGelly={true}
            cursorSize={20}
            cursorBackgrounColor="#f3c623"
            exclusionBackgroundColor="#10316b"
          />
          <Layout />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}

export default App;
