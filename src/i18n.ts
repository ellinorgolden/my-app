import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to my React portfolio",
      home: "Home",
      about: "About me",
      cv: "CV",
      projects: "Projects",
      contact: "Contact",
    },
  },
  no: {
    translation: {
      welcome: "Velkommen til min React portefølje",
      home: "Hjem",
      about: "Om meg",
      cv: "CV",
      projects: "Prosjekter",
      contact: "Kontakt",
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
    debug: true, // Feilmeldinger i konsollen
  });

export default i18n;