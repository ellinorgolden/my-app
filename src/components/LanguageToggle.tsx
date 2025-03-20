import { useTranslation } from "react-i18next";
import "./Layout.css";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  return (
    <div className="language-switcher">
        <button onClick={() => i18n.changeLanguage("en")}>
            <img src="/flags/gb.svg" alt="English" className="flag-icon" />
        </button>
        <button onClick={() => i18n.changeLanguage("no")}>
            <img src="/flags/no.svg" alt="Norsk" className="flag-icon" />
        </button>
    </div>
  );
};

export default LanguageToggle;