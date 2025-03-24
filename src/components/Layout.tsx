import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Layout.css"; 
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

    const { t } = useTranslation();

    const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);

    const toggleProjectMenu = () => {
      setIsProjectMenuOpen(!isProjectMenuOpen);
    };

  return (
    <div className="layout">
      <header>
        <div className="preferences-panel">
          <LanguageToggle />
          <h1>{t("welcome")}</h1>
          <ThemeToggle />
        </div>
      </header>

      <div className="container">
        <nav className="sidemenu">
          <ul>
            <li><Link to="/">{t("home")}</Link></li>
            <li><Link to="/about">{t("about")}</Link></li>
            <li><Link to="/cv">{t("cv")}</Link></li>

            <li className={`dropdown ${isProjectMenuOpen ? "open" : ""}`}>
              <button onClick={toggleProjectMenu} className="menu-btn">
                {t("projects")}
              </button>
              {isProjectMenuOpen && (
                <ul className="submenu">
                  <li><Link to="/projects/prospector" onClick={() => setIsProjectMenuOpen(false)}>Prospector</Link></li>
                  <li><Link to="/projects/tanteo" onClick={() => setIsProjectMenuOpen(false)}>Tanteo</Link></li>
                </ul>
              )} 
          </li>

            <li><Link to="/contact">{t("contact")}</Link></li>
          </ul>

        </nav>
        <main>{children}</main>
      </div>

      <footer>
        <p>&copy; 2025 Min Portefølje. Alle rettigheter reservert.</p>
      </footer>
    </div>
  );
};

export default Layout;