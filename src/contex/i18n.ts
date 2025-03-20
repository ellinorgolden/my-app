import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locals/en.json";
import no from "../locals/no.json";

const savedLanguage = localStorage.getItem("language") || "no"; 

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      no: { translation: no },
    },
    lng: savedLanguage, 
    fallbackLng: "no",
    interpolation: { escapeValue: false },
    debug: true, 
  });

  i18n.on("languageChanged", (lng) => {
    localStorage.setItem("language", lng);
  });

export default i18n;