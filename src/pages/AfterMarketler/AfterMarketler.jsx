import React from 'react'
import "./AfterMarketler.scss"
import {motion} from "framer-motion"
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function AfterMarketler() {

  const { t } = useTranslation();

  return (
    <section className='AfterMarketler' >
       <div className='partnersLogos'>
        <img src="/assets/partners/01.png" alt="partners" />
        <img src="/assets/partners/02.png" alt="partners" />
        <img src="/assets/partners/03.png" alt="partners" />
        <img src="/assets/partners/04.png" alt="partners" />
        <img src="/assets/partners/05.png" alt="partners" />
       </div>
       <div className='partnersLogos'>
        <img src="/assets/partners/06.png" alt="partners" />
        <img src="/assets/partners/07.png" alt="partners" />
        <img src="/assets/partners/08.png" alt="partners" />
        <img src="/assets/partners/09.png" alt="partners" />
        <img src="/assets/partners/010.png" alt="partners" />
       </div>
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} className='afterText' >
        <h1>{t("aftermarketler_title")}</h1>
      <p>{t("aftermarketler_text")}</p>
</motion.div>
    </section>
  )
}

export default AfterMarketler
