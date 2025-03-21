import React from "react";
import "./CV.css";
import { useTranslation } from "react-i18next";

const CV: React.FC = () => {

    const { t } = useTranslation();

    return (
      <div>
        <header className="cv-header">
          <h1 className="cv-h1">Ellinor Golden</h1>
          <p className="cv-paragraf">{t("computerEngineer")}</p>
        </header>
        <div className="grid-container">
          <div>
            <h2 className="cv-h2">{t("workExperience")}</h2>
            <h3 className="cv-h3">{t("SDE")}, Barco AS, Fredrikstad</h3>
            <p className="cv-paragraf">{t("september")} 2021 - {t("october")} 2024</p>
            <h3 className="cv-h3">{t("storeEmployee")}, Kid Interiør, Sarpsborg</h3>
            <p className="cv-paragraf">{t("december")} 2013 - {t("september")} 2021</p>

            <h2 className="cv-h2">{t("education")}</h2>
            <h3 className="cv-h3">Bachoelor, {t("engineering")}, {t("iT")}, Hiof, Halden</h3>
            <p className="cv-paragraf">{t("august")} 2018 - {t("may")} 2021</p>
            <h3 className="cv-h3">{t("HEEQ")}, Glemmen VGS, Fredrikstad</h3>
            <p className="cv-paragraf">{t("august")} 2017 - {t("may")} 2018</p>

            <h2 className="cv-h2">{t("courses")}</h2>
            <h3 className="cv-h3">{t("projectManagement")}, Handselshøyskolen BI, {t("onlineStudy")}</h3>
            <p className="cv-paragraf">{t("august")} 2024 - {t("december")} 2024</p>
          </div> 
          <div>
            <h2 className="cv-h2">{t("skills")}</h2>
            <h3 className="cv-h3">{t("programmingLanguages")}</h3>
            <p className="cv-paragraf">JavaScript, TypeScript, HTML, CSS</p>
            <h3 className="cv-h3">{t("frameworkLibraries")}</h3>
            <p className="cv-paragraf">React, Angular</p>
            <h3 className="cv-h3">{t("VersionControlCollaboration")}</h3>
            <p className="cv-paragraf">Git, GitHub, Confluence, Jira</p>
            <h3 className="cv-h3">{t("developmentTools")}</h3>
            <p className="cv-paragraf">Vite, NPM</p>
            <h3 className="cv-h3">{t("designTools")}</h3>
            <p className="cv-paragraf">Figma</p>
            <h2 className="cv-h2">{t("languages")}</h2>
            <p className="cv-paragraf">{t("norwegian")} - {t("motherTongue")}</p>
            <p className="cv-paragraf">{t("english")} - {t("fluent")}</p>
          </div>
        </div>
      </div>
    )
  };
  
  export default CV;
  