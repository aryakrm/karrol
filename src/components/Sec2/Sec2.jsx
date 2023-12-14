import React from 'react'
import "./Sec2.scss"
import { BsSpeedometer } from "react-icons/bs";
import { BsCheckAll } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const { useLayoutEffect, useRef } = React;
gsap.registerPlugin(ScrollTrigger);



function Sec2() {

  const { t } = useTranslation();

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
  const el2 = useRef();
  // store the timeline in a ref.
  
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".animated2");
      boxes.forEach((box) => {
        gsap.fromTo(box, { x: "200px" }, { 
          x: 0,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
            ease: "linear"
          }
        });
      });
    }, el2);
    return () => ctx.revert();
  }, []);

  return (
    <section className='Sec2' >
      <div className='sec2Left'>
        <ul ref={el} >
            <li className='animated' ><BsSpeedometer /> <p>{t("hizli")}</p> </li>
            <li className='animated' ><BsCheckAll /><p>{t("orijinal")}</p></li>
            <li className='animated' ><GiTakeMyMoney /><p>{t("uygun")}</p></li>
            <li className='animated' ><GrSecure /><p>{t("guvenli")}</p></li>
        </ul>
        </div> 
      <div ref={el2} className='sec2Right'>
        <img className='animated2'  src="/assets/isacoLogo.png" alt="isaco logo" />
        <h1 className='animated2' >{t("karrolOtomotiv")}</h1>
        <p className='animated2' >{t("isaco")}</p>
      </div>
    </section>
  )
}
export default Sec2
