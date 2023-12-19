import {useEffect, useState} from "react";
import "./Loading.scss";
import ReactLoading from "react-loading";

function Loading() {

    const [show, setShow] = useState(false)
  useEffect(() => {
    let timeout = setTimeout(() => setShow(true), 5000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="Loading">
        {show &&  <ReactLoading
        type="spinningBubbles"
        color="#061022"
        height={667}
        width={375}
        delay={5000}
      />}
      
    </div>
  );
}

export default Loading;
