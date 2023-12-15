import React from 'react'
import "./Distribütör.scss"
import {motion} from "framer-motion"
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Distribütör() {

  const { t } = useTranslation();

  return (
    <section className='Distributor' >
       <motion.img initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 0.5, scale: 1 }}
    transition={{ duration: 0.5 }} src="/assets/dist.jpg" alt="Karrol" />
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} className='distText' >
        <h1>{t("distributor_title")}</h1>
      <p>{t("distributor_text")}</p>
</motion.div>
    </section>
  )
}

export default Distribütör
