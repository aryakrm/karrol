import React from "react";
import "./Sec3.scss";
import Slider from "react-slick";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiShakeHandsFill } from "react-icons/ri";
import LazyLoad from "react-lazy-load";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const { useLayoutEffect, useRef } = React;
gsap.registerPlugin(ScrollTrigger);

function Sec3() {
  const { t } = useTranslation();

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 8,
    slidesToScroll: 4,
  };

  const el = useRef();
  // store the timeline in a ref.

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".animated");
      boxes.forEach((box) => {
        gsap.fromTo(
          box,
          { y: "100px" },
          {
            y: 0,
            scrollTrigger: {
              trigger: box,
              start: "bottom bottom",
              end: "top 60%",
              scrub: true,
              ease: "linear",
            },
          }
        );
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="Sec3">
      {/* <video autoPlay loop muted >
        <source src='/assets/mapLive.mp4' type='video/mp4' />
      </video> */}
      <div className="Sec3-wrapper">
        <img className="gear" src="/assets/gear.png" alt="gear" />
        <div ref={el} className="partnerInfo">
          <RiShakeHandsFill className="animated" />
          <h3 className="animated">{t("partners")}</h3>
        </div>
        <div className="partnerLogos">
          <Slider {...settings}>
            <div>
              <LazyLoad>
                <img src="/assets/partners/01.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/02.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/03.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/04.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/05.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/06.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/07.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/08.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/09.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/010.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/011.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/012.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/013.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/014.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/015.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/016.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/017.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/018.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/019.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/020.png" alt="partners" />
              </LazyLoad>
            </div>
            <div>
              <LazyLoad>
                <img src="/assets/partners/021.jpg" alt="partners" />
              </LazyLoad>
            </div>
          </Slider>
        </div>
        <p>{t("slogan")}</p>
      </div>
    </section>
  );
}

export default Sec3;
