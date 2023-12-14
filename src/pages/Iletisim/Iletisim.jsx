import React from 'react'
import "./Iletisim.scss"
import {motion} from "framer-motion"
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Iletisim() {

  const { t } = useTranslation();

  return (
    <section className='Contact' >
      <div className='contactInfo' >
      <motion.iframe initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} title='map' className='location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6125.403088803639!2d32.853549!3d39.858521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34543b288d24d%3A0x79f06278fab40a27!2sRENAZA!5e0!3m2!1str!2str!4v1702408699682!5m2!1str!2str" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></motion.iframe>
      <div className='contactText' >
        <h2>{t("ihracat")}</h2>
        <p>Mail: emin.h@karrol.com.tr</p>
        <h2>{t("ticaret")}</h2>
        <p>ADRES: İlkbahar Mah. Doğukent Cad. Reneza Plaza No:739/83 ÇANKAYA/ANKARA/TÜRKİYE</p>
        <p>Telefon: +90 312 511 92 11</p>
        <p>Cep: +90 531 300 22 71</p>
        <p>Mail: info@karrol.com.tr</p>
      </div>
      </div>
      {/* <img src="/assets/contactPic.jpg" alt="Contact" /> */}
    </section>
  )
}


export default Iletisim
