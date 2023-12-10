import React from 'react'
import "./Sec3.scss"
import { RiShakeHandsFill } from "react-icons/ri";
import LazyLoad from 'react-lazy-load';

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Sec3() {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
  return (
    <section className='Sec3' >
      <div className='partnerInfo' >
      <RiShakeHandsFill />
        <h3>Karrol Otomotiv SKF, SNR TNT, EYQUEM, CORTECO, INA, LUK, FAG, VALEO, GATE, DAYCO, SKY satıcısıdır.</h3>
        </div>
      <div className='partnerLogos' >
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
    </Slider>
      </div>
    </section>
  )
}

export default Sec3
