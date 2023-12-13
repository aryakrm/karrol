import React from 'react'
import "./Header.scss"
import Nav from '../Nav/Nav'
import { motion, useScroll } from "framer-motion";

function Header() {
  const { scrollYProgress } = useScroll();
  return (
    <header>
      
      <Nav/>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </header>
  )
}

export default Header
