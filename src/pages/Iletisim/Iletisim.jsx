import React from "react";
import "./Iletisim.scss";
import { motion } from "framer-motion";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Iletisim() {
  const { t } = useTranslation();

  return (
    <section className="Contact">
      <div className="contactInfo">
        <motion.iframe
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          title="map"
          className="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.1757016312217!2d32.852663676510026!3d39.84789539006344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345001f1eba5f%3A0x5cecac1c9117f284!2zU2lucGHFnyBBbHTEsW5vcmFu!5e0!3m2!1sen!2s!4v1714059236121!5m2!1sen!2s
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></motion.iframe>
        <div className="contactText">
          <h2>{t("ihracat")}</h2>
          <p>Mail: info@karrol.net</p>
          <h2>{t("ticaret")}</h2>
          <p>
            Address: İlkbahar Mah. Galip Erdem Cad. Sinpaş Altınoran Sitesi.
            Kule 1923. No: 48 Çankaya Ankara Türkiye
          </p>
          <p>Telefon: +90 312 511 92 11</p>
          <p>Mail: info@karrol.net</p>
        </div>
      </div>
      {/* <img src="/assets/contactPic.jpg" alt="Contact" /> */}
    </section>
  );
}

export default Iletisim;
