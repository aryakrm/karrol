import React, {useRef, useEffect} from 'react'
import "./Home.scss"
import Intro from '../../components/Intro/Intro'
import Sec1 from '../../components/Sec1/Sec1'
import Sec2 from '../../components/Sec2/Sec2'
import Sec3 from '../../components/Sec3/Sec3'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)




function Home() {
  
  const secRef = useRef(null);

  useEffect(() => {
    const el = secRef.current;
    gsap.fromTo(el, {rotation: 0}, {rotation: 180, duration: 20, ScrollTrigger: {
        trigger: el
    }} )
  }, []);

  return (
    <div className='Home' >
      <Intro/>
      <Sec1 />
      <Sec2/>
      <Sec3/>
    </div>
  )
}

export default Home
