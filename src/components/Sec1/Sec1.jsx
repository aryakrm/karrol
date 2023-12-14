import React from 'react'
import "./Sec1.scss"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const { useLayoutEffect, useRef } = React;
gsap.registerPlugin(ScrollTrigger);


function Sec1() {
 
  const el = useRef();
  // store the timeline in a ref.
  
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".animated");
      boxes.forEach((box) => {
        gsap.fromTo(box, { y: "100px" }, { 
          y: 0,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 60%",
            scrub: true,
            ease: "linear"
          }
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section>
    <div className='Sec1' ref={el} >
      <div className='animated' ><img src="/assets/renaultLogo.png" alt="renaultLogo" /></div>
      <div className='animated' ><img src="/assets/peugeotLogo.png" alt="peugeotLogo" /></div>
      <div className='animated' ><img src="/assets/opelLogo.png" alt="opelLogo" /></div>
      <div className='animated' ><img src="/assets/citroenLogo.png" alt="citroenLogo" /></div>
    </div></section>
  )
}

export default Sec1
