import React from "react";
import "./Depo.scss";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { LuContainer } from "react-icons/lu";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Depo() {
  const { t } = useTranslation();

  return (
    <section className="Depo">
      <p>
        <LuContainer />
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
        <span>{t("depo7_text")}</span> <br />{" "}
        <span className="depo_head">{t("depo_explore")}</span> <br />
      </p>
      <Box sx={{ width: 500, minHeight: 829 }}>
        <Masonry columns={3} spacing={1} c>
          {/* {imageData.map(({ src, id }) => (
          <div key={id}>
            <img
              src={`${src}?w=162&auto=format`}
              srcSet={`${src}?w=162&auto=format&dpr=2 2x`}
              alt={id}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
              }}
            />
          </div>
        ))} */}
          <img src="/assets/depo01.jpg" alt="" />
          <img src="/assets/depo02.jpg" alt="" />
          <img src="/assets/depo03.jpg" alt="" />
          <img src="/assets/depo04.jpg" alt="" />
          <img src="/assets/depo05.jpg" alt="" />
        </Masonry>
      </Box>
      <p>{t("depo_sub")}</p>
    </section>
  );
}

export default Depo;
