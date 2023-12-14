import React from 'react'
import "./Hakkimizda.scss"
import {motion} from "framer-motion"
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Hakkimizda() {
  
  const { t } = useTranslation();

  return (
    <section className='Hakkimizda'>
      <motion.img initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} src="/assets/karrolAbout.jpg" alt="Karrol" />
      <motion.div initial={{ opacity: 0, scale: 1.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} className='aboutText' >
      <img  className='karrolLogo' src="/assets/karrolLogo.png" alt="Karrol Logo" />
        <h1>{t("hakkimizda_title")}</h1>
      <p>{t("hakkimizda_text")}</p>
</motion.div>
      
    </section>
  )
}

export default Hakkimizda
