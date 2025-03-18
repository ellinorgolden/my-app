import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to my website",
      language: "Change language",
      about: "About me",
    },
  },
  no: {
    translation: {
      welcome: "Velkommen til min nettside",
      language: "Bytt språk",
      about: "Om meg",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Standard språk
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    debug: true, // 🔍 Gir feilmeldinger i konsollen
  });

export default i18n;