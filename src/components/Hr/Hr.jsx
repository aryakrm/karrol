import React from "react";
import "./Hr.scss";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Hr() {
  const { t } = useTranslation();

  return (
    <section className="Hr">
      <div className="hr_text">
        <h2>{t("hr_title")}</h2>
        <p>{t("hr_text")}</p>
      </div>
    </section>
  );
}

export default Hr;
