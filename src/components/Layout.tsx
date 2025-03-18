import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Layout.css"; 
import { useTranslation } from "react-i18next";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

    const { t, i18n } = useTranslation();

  return (
    <div className="layout">
      {/* Header */}
      <header>
        <h1>{t("welcome")}</h1>
        <div className="language-switcher">
        <button onClick={() => i18n.changeLanguage("en")}>
            <img src="/flags/gb.svg" alt="English" className="flag-icon" />
          </button>
          <button onClick={() => i18n.changeLanguage("no")}>
            <img src="/flags/no.svg" alt="Norsk" className="flag-icon" />
          </button>
        </div>
      </header>

      {/* Container med sidemeny + main */}
      <div className="container">
        {/* Sidemeny */}
        <nav className="sidemenu">
          <ul>
            <li><Link to="/about">Home</Link></li>
            <li><Link to="/about">{t("about")}</Link></li>
            <li><Link to="/about">services</Link></li>
            <li><Link to="/about">contact</Link></li>
          </ul>

        </nav>

        {/* Hovedinnhold (children) */}
        <main>{children}</main>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Min Nettside. Alle rettigheter reservert.</p>
      </footer>
    </div>
  );
};

export default Layout;