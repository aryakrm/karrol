import React, { useRef, useEffect, Suspense } from "react";
import "./Home.scss";
import Loading from "../Loading/Loading";
import Intro from "../../components/Intro/Intro";
import Sec1 from "../../components/Sec1/Sec1";
import Sec2 from "../../components/Sec2/Sec2";
import Sec3 from "../../components/Sec3/Sec3";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hr from "../../components/Hr/Hr";
import Depo from "../../components/Depo/Depo";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const secRef = useRef(null);

  useEffect(() => {
    const el = secRef.current;
    gsap.fromTo(
      el,
      { rotation: 0 },
      {
        rotation: 180,
        duration: 20,
        ScrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className="Home">
        <Intro />
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Depo />
        <Hr />
      </div>
    </Suspense>
  );
}

export default Home;
