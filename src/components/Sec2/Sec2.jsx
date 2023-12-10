import React from 'react'
import "./Sec2.scss"
import { BsSpeedometer } from "react-icons/bs";
import { BsCheckAll } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";

function Sec2() {
  return (
    <section className='Sec2' >
      <div className='sec2Left'>
        <ul>
            <li><BsSpeedometer /> <p>Karrol ile hızlı teslimat.</p> </li>
            <li><BsCheckAll /><p>Karrol ile orijinal ürünler.</p></li>
            <li><GiTakeMyMoney /><p>Karrol ile uygun ürünler.</p></li>
            <li><GrSecure /><p>Karrol ile güvenli teslimat.</p></li>
        </ul>
        </div> 
      <div className='sec2Right'>
        <img src="/assets/isacoLogo.png" alt="isaco logo" />
        <h1>Karrol Otomotiv</h1>
        <p>İsaco'nun TÜRKİYE VE KUZEY AFRİKA RESMİ distribütörüdür.</p>
      </div>
    </section>
  )
}
export default Sec2
