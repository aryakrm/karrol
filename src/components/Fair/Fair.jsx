import React from "react";
import "./Fair.scss";
import { MdEventAvailable } from "react-icons/md";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Fair() {
  const { t } = useTranslation();

  return (
    <section className="Fair">
      <MdEventAvailable />
      <h1>{t("fuar_title")}</h1>
      <video autoPlay loop muted>
        <source src="/assets/fuar.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

export default Fair;
