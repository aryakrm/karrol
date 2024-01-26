import React from "react";
import "./Cp.scss";
import { RiProfileLine } from "react-icons/ri";

// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Cp() {
  const { t } = useTranslation();
  return (
    <section className="Cp">
      <RiProfileLine />
      <h1>{t("cp_title")}</h1>
      <img src="/assets/cp.jpg" alt="Company Profile Pic" />
      <p>{t("cp_desc")}</p>
      <h2>{t("cp_key")}</h2>
      <ul>
        <li>{t("cp1")}</li>
        <li>{t("cp2")}</li>
        <li>{t("cp3")}</li>
        <li>{t("cp4")}</li>
        <li>{t("cp5")}</li>
        <li>{t("cp6")}</li>
        <li>{t("cp7")}</li>
      </ul>
    </section>
  );
}

export default Cp;
