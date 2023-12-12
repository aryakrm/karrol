import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Nav.scss"
import { FaHome } from "react-icons/fa";
import { FaMagento } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";





function Nav() {

  const [isShowed, setIsShowed] = useState(false);


  const showDropdown = () => {
    setIsShowed(true);
  };
  const hideDropdown = () => {
    setIsShowed(false);
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
    </nav>
  )
}

export default Nav
