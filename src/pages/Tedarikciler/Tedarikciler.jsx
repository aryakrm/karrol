import React from 'react'
import "./Tedarikciler.scss"
import {motion} from "framer-motion"
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Tedarikciler() {

  const { t } = useTranslation();

  return (
    <section className='AnaMarkalar' >
       <motion.img initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 0.5, scale: 1 }}
    transition={{ duration: 0.5 }} src="/assets/anaMarkalar.jpg" alt="Karrol" />
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} className='anaText' >
        <h1>{t("anamarkalar_title")}</h1>
      <p>{t("anamarkalar_text")}</p>
</motion.div>
    </section>
  )
}

export default Tedarikciler
