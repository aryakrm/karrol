import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Nav.scss"
import { FaHome } from "react-icons/fa";
import { FaMagento } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "/node_modules/flag-icons/css/flag-icons.min.css";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";





function Nav() {

  const [active, setActive] = useState(false);

  const [isShowed, setIsShowed] = useState(false);

  const { t } = useTranslation();


  const showDropdown = () => {
    setIsShowed(true);
  };
  const hideDropdown = () => {
    setIsShowed(false);
  };

  const menuTogglerHandler = () => {
    setActive(!active);
  };

  function selectEn() {
    let loc = "/";
    window.location.replace(loc + "?lng=en");
  }
  function selectAr() {
    let loc = "/";
    window.location.replace(loc + "?lng=ar");
  }
  function selectTr() {
    let loc = "/";
    window.location.replace(loc + "?lng=tr");
  }

  return (
    <nav>
      <Link to={"/home"} ><motion.img initial={{ x: -100 }}
      animate={{ x: 0 }}
  transition={{ ease: "easeOut", duration: 1 }} src="/assets/karrolLogo.png" alt="Karrol Logo" /></Link>
      
      <motion.div initial={{ x: 200 }}
      animate={{ x: 0 }}
  transition={{ ease: "easeOut", duration: 1 }} className='navMenu' >
        <ul className='menu' >
            <li>  <Link to={"/home"} > <FaHome /> {t("anasayfa")}</Link> </li>
            <li>  <Link to={"/about"} ><MdOutlineMedicalInformation /> {t("hakkimizda")}</Link> </li>
            <li onMouseOver={showDropdown} onMouseLeave={hideDropdown} >  <Link to={"/suppliers"} ><MdOutlineProductionQuantityLimits /> {t("tedarikciler")} <FaCaretDown /></Link> </li>
            <li>  <Link to={"/distributor"} ><FaMagento /> {t("distributor")}</Link> </li>
            <li> <Link to={"/contact"} > <IoIosContacts /> {t("iletisim")} </Link> </li>
            <div className="flags">
        <span onClick={selectAr} className="fi fi-sa"></span>
        <span onClick={selectTr} className="fi fi-tr"></span>
        <span onClick={selectEn} className="fi fi-gb"></span>
      </div>
        </ul>
        
      </motion.div>
      <ul
          className="dropDownMenu"
          style={{ display: isShowed ? "block" : "none" }}
          onMouseOver={showDropdown}
          onMouseLeave={hideDropdown}
        >
          <li>  <Link to={"/suppliers"} ><FaMagento /> {t("anamarkalar")}</Link> </li>
          <li>  <Link to={"/afterMarkets"} ><FaMagento /> {t("aftermarketler")} </Link> </li>
        </ul>
        <div onClick={menuTogglerHandler} className="hamburger">
          {active ? (
            <AiOutlineClose className="_icon" />
          ) : (
            <GiHamburgerMenu className="_icon" />
          )}
        </div>
        {active ? (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="side-menu"
            onClick={() => setActive(!active)}
          >
            <ul className="side-menu-list">
            <li>  <Link to={"/home"} > <FaHome /> {t("anasayfa")}</Link> </li>
            <li>  <Link to={"/about"} ><MdOutlineMedicalInformation /> {t("hakkimizda")}</Link> </li>
            <li onMouseOver={showDropdown} onMouseLeave={hideDropdown} >  <Link to={"/suppliers"} ><MdOutlineProductionQuantityLimits /> {t("tedarikciler")} <FaCaretDown /></Link> </li>
            <li>  <Link to={"/distributor"} ><FaMagento /> {t("distributor")} </Link> </li>
            <li> <Link to={"/contact"} > <IoIosContacts /> {t("iletisim")} </Link> </li>
            <div className="flags">
        <span onClick={selectAr} className="fi fi-sa"></span>
        <span onClick={selectTr} className="fi fi-tr"></span>
        <span onClick={selectEn} className="fi fi-gb"></span>
      </div>
            </ul>
          </motion.div>
        ) : null}
    </nav>
  )
}

export default Nav
