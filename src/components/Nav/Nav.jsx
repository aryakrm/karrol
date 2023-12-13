import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
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





function Nav() {

  const [active, setActive] = useState(false);

  const [isShowed, setIsShowed] = useState(false);


  const showDropdown = () => {
    setIsShowed(true);
  };
  const hideDropdown = () => {
    setIsShowed(false);
  };

  const menuTogglerHandler = () => {
    setActive(!active);
  };

  return (
    <nav>
      <img src="/assets/karrolLogo.png" alt="Karrol Logo" />
      <div className='navMenu' >
        <ul className='menu' >
            <li>  <Link to={"/home"} > <FaHome /> Anasayfa</Link> </li>
            <li>  <Link to={"/about"} ><MdOutlineMedicalInformation /> Hakkımızda</Link> </li>
            <li onMouseOver={showDropdown} onMouseLeave={hideDropdown} >  <Link to={"/suppliers"} ><MdOutlineProductionQuantityLimits /> Tedarikçiler <FaCaretDown /></Link> </li>
            <li>  <Link to={"/distributor"} ><FaMagento /> Distribütör</Link> </li>
            <li> <Link to={"/contact"} > <IoIosContacts /> İletişim</Link> </li>
        </ul>
        
      </div>
      <ul
          className="dropDownMenu"
          style={{ display: isShowed ? "block" : "none" }}
          onMouseOver={showDropdown}
          onMouseLeave={hideDropdown}
        >
          <li>  <Link to={"/suppliers"} ><FaMagento /> Ana Markalar</Link> </li>
          <li>  <Link to={"/afterMarkets"} ><FaMagento /> After Marketler</Link> </li>
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
            <li>  <Link to={"/home"} > <FaHome /> Anasayfa</Link> </li>
            <li>  <Link to={"/about"} ><MdOutlineMedicalInformation /> Hakkımızda</Link> </li>
            <li onMouseOver={showDropdown} onMouseLeave={hideDropdown} >  <Link to={"/suppliers"} ><MdOutlineProductionQuantityLimits /> Tedarikçiler <FaCaretDown /></Link> </li>
            <li>  <Link to={"/distributor"} ><FaMagento /> Distribütör</Link> </li>
            <li> <Link to={"/contact"} > <IoIosContacts /> İletişim</Link> </li>
            </ul>
          </motion.div>
        ) : null}
    </nav>
  )
}

export default Nav
