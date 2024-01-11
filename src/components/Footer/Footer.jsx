import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaMagento } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="upFooter">
        <div className="footerMenu">
          <h3>{t("sayfalar")}</h3>
          <ul>
            <li>
              {" "}
              <Link to={"/home"}>
                {" "}
                <FaHome /> {t("anasayfa")}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/about"}>
                <MdOutlineMedicalInformation /> {t("hakkimizda")}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/suppliers"}>
                <MdOutlineProductionQuantityLimits /> {t("tedarikciler")}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/distributor"}>
                <FaMagento /> {t("distributor")}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to={"/contact"}>
                {" "}
                <IoIosContacts /> {t("iletisim")}
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="footerContact">
          <h3>
            {t("limited-sirketi")} <br /> {t("iletisim")}
          </h3>
          <p>
            Tel: +90 312 511 92 11 <br />
            E-Mail: info@karrol.net
          </p>
          <img src="/assets/karrolLogo.png" alt="Karrol Logo" />
        </div>

        <div className="footerInfo">
          <h3>{t("calisma")}</h3>
          <p>
            {t("haftaici-day")} <br /> {t("haftaici-hours")} <br />
            {t("cumartesi")} <br /> {t("cumartesi-hours")} <br />
            {t("pazar")}{" "}
          </p>
        </div>
      </div>
      <div className="downFooter">
        <p>Karrol Otomotiv © 2023 - Tüm Hakları Saklıdır.</p>
        <p>Developed by Arya Karimi</p>
      </div>
    </footer>
  );
}

export default Footer;
