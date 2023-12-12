import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaMagento } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";

function Footer() {
  return (
    <footer>
      <div className='upFooter' >
      <div className='footerMenu' >
        <h3>SAYFALAR</h3>
        <ul>
            <li>  <Link to={"/home"} > <FaHome /> Anasayfa</Link> </li>
            <li>  <Link to={"/about"} ><MdOutlineMedicalInformation /> Hakkımızda</Link> </li>
            <li>  <Link to={"/suppliers"} ><MdOutlineProductionQuantityLimits /> Tedarikçiler</Link> </li>
            <li>  <Link to={"/distributor"} ><FaMagento /> Distribütör</Link> </li>
            <li> <Link to={"/contact"} > <IoIosContacts /> İletişim</Link> </li>
        </ul>
      </div>
        <div className='footerContact' >
          <h3>KARROL OTOMOTİV TİC. LTD. ŞTİ. <br /> İLETİŞİM</h3>
          <p>Tel: +90 312 511 92 11 <br />
               E-Mail: info@karrol.com.tr</p>
               <img src="/assets/karrolLogo.png" alt="Karrol Logo" />
      </div>
      
      <div className='footerInfo' >
        <h3>ÇALIŞMA SAATLERİMİZ</h3>
        <p>Pazartesi - Cuma <br /> 08.30 - 19.00 <br />
            Cumartesi <br /> 08.30 - 19.00 <br />
          Pazar Tatil Günü</p>
      </div>
      

      </div>
      <div className='downFooter' ></div>
      
    </footer>
  )
}

export default Footer
