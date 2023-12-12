import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.scss"
import { FaHome } from "react-icons/fa";
import { FaMagento } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";




function Nav() {
  return (
    <nav>
      <img src="/assets/karrolLogo.png" alt="Karrol Logo" />
      <div className='navMenu' >
        <ul>
            <li>  <Link to={"/home"} > <FaHome /> Anasayfa</Link> </li>
            <li>  <Link to={"/about"} ><MdOutlineMedicalInformation /> Hakkımızda</Link> </li>
            <li>  <Link to={"/suppliers"} ><MdOutlineProductionQuantityLimits /> Tedarikçiler</Link> </li>
            <li>  <Link to={"/distributor"} ><FaMagento /> Distribütör</Link> </li>
            <li> <Link to={"/contact"} > <IoIosContacts /> İletişim</Link> </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
