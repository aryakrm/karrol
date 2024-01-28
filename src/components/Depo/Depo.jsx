import React from "react";
import "./Depo.scss";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { TbBuildingWarehouse } from "react-icons/tb";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Depo() {
  const { t } = useTranslation();

  return (
    <section className="Depo">
      <p className="depo-title">
        {" "}
        <TbBuildingWarehouse />
        {t("depo_sub")} <br />
        <span
          style={{ marginTop: "1rem", fontSize: "1.5rem" }}
          className="depo_head"
        >
          {t("depo_explore")}
        </span>
      </p>
      <Box sx={{ width: 300, minHeight: 629 }}>
        <Masonry columns={3} spacing={3} c>
          <img src="/assets/depo01.jpg" alt="" />
          <img src="/assets/depo02.jpg" alt="" />
          <img src="/assets/depo03.jpg" alt="" />
          <img src="/assets/depo04.jpg" alt="" />
          <img src="/assets/depo05.jpg" alt="" />
        </Masonry>
      </Box>
      <p className="depo-main">
        <span>{t("depo_main")}</span> <br />{" "}
        <span className="depo_head">{t("depo_key")}</span> <br />{" "}
        <span className="depo_head">{t("depo1_title")}</span> <br />
        <span>{t("depo1_text")}</span> <br />{" "}
        <span className="depo_head">{t("depo2_title")}</span> <br />{" "}
        <span>{t("depo2_text")}</span> <br />{" "}
        <span className="depo_head">{t("depo3_title")}</span> <br />{" "}
        <span>{t("depo3_text")}</span> <br />{" "}
        <span className="depo_head">{t("depo4_title")}</span> <br />
        <span>{t("depo4_text")}</span> <br />{" "}
        <span className="depo_head">{t("depo5_title")}</span> <br />{" "}
        <span>{t("depo5_text")}</span> <br />{" "}
        <span className="depo_head">{t("depo6_title")}</span> <br />{" "}
        <span>{t("depo6_text")}</span> <br />{" "}
        <span className="depo_head">{t("depo7_title")}</span> <br />{" "}
        <span>{t("depo7_text")}</span> <br /> <br />
      </p>
    </section>
  );
}

export default Depo;
