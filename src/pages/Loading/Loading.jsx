import React from "react";
import "./Loading.scss";
import ReactLoading from "react-loading";

function Loading() {
  return (
    <div className="Loading">
      <ReactLoading
        type="spinningBubbles"
        color="#061022"
        height={667}
        width={375}
        delay={5000}
      />
    </div>
  );
}

export default Loading;
