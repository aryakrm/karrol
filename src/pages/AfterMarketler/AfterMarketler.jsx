import React from "react";
import "./AfterMarketler.scss";
import { motion } from "framer-motion";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function AfterMarketler() {
  const { t } = useTranslation();

  return (
    <section className="AfterMarketler">
      <div className="partnersLogos">
        <img src="/assets/partners/partners/01.gif" alt="partners" />
        <img src="/assets/partners/partners/02.png" alt="partners" />
        <img src="/assets/partners/partners/03.png" alt="partners" />
        <img src="/assets/partners/partners/04.png" alt="partners" />
        <img src="/assets/partners/partners/05.png" alt="partners" />
        <img src="/assets/partners/partners/06.png" alt="partners" />
        <img src="/assets/partners/partners/07.png" alt="partners" />
        <img src="/assets/partners/partners/08.png" alt="partners" />
        <img src="/assets/partners/partners/09.png" alt="partners" />
        <img src="/assets/partners/partners/010.png" alt="partners" />
      </div>
      <div className="partnersLogos">
        <img src="/assets/partners/011.png" alt="partners" />
        <img src="/assets/partners/012.png" alt="partners" />
        <img src="/assets/partners/013.png" alt="partners" />
        <img src="/assets/partners/015.png" alt="partners" />
        <img src="/assets/partners/016.png" alt="partners" />
        <img src="/assets/partners/017.png" alt="partners" />
        <img src="/assets/partners/018.png" alt="partners" />
        <img src="/assets/partners/019.png" alt="partners" />
        <img src="/assets/partners/020.png" alt="partners" />
        <img src="/assets/partners/021.jpg" alt="partners" />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="afterText"
      >
        <h1>{t("aftermarketler_title")}</h1>
        <p>{t("aftermarketler_text")}</p>
      </motion.div>
    </section>
  );
}

export default AfterMarketler;
