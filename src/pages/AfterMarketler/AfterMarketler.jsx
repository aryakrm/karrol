import React from 'react'
import "./AfterMarketler.scss"
import {motion} from "framer-motion"
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function AfterMarketler() {

  const { t } = useTranslation();

  return (
    <section className='AfterMarketler' >
       <motion.img initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} src="/assets/afterMarketler.jpg" alt="Karrol" />
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
