import {useEffect, useState} from "react";
import "./Loading.scss";
import ReactLoading from "react-loading";

function Loading() {

    const [show, setShow] = useState(true)

    useEffect(() => {
        setTimeout(() => {
          setShow(false);
        }, 5000);
      }, []);

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
