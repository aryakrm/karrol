import React from 'react'
import "./Intro.scss"
import {motion} from "framer-motion"
// import { t } from "i18next";
import { useTranslation } from "react-i18next";


function Intro() {
  const { t } = useTranslation();
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}  className='Intro'>
      <video autoPlay loop muted >
        <source src='/assets/introVideo.mp4' type='video/mp4' />
      </video>
      <h1>{t("intro_title")}</h1>
           <div class="mouse"></div>
    </motion.div>
  )
}

export default Intro
