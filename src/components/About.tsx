import React from "react";
import { useTranslation } from "react-i18next";
import "./About.css";

const About: React.FC = () => {

      const { t } = useTranslation();

  return (
    <div>
      <header>
        <h1>{t("about")}</h1>
      </header>
      <div className="about-section">
        <p>{t("aboutContent1")}</p>
        <p>{t("aboutContent2")}</p>
        <p>{t("aboutContent3")}</p>
        <p>{t("aboutContent4")}</p>
        <p>{t("aboutContent5")}</p>
        <p>{t("aboutContent6")}</p>
    </div>
    </div>
  );
};

export default About; 