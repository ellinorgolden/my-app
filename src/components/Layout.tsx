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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleProjectMenu = () => {
      setIsProjectMenuOpen(!isProjectMenuOpen);
    };

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
      setIsProjectMenuOpen(false);
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

      <div className="hamburger-container">
        <button
            className="hamburger"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu">
            ☰
        </button>
      </div>

      <div className="container">

      <nav className={`sidemenu ${isMobileMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMobileMenu}>{t("home")}</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>{t("about")}</Link>
            </li>
            <li>
              <Link to="/cv" onClick={closeMobileMenu}>{t("cv")}</Link>
            </li>

            <li className={`dropdown ${isProjectMenuOpen ? "open" : ""}`}>
              <button onClick={toggleProjectMenu} className="menu-btn">
                {t("projects")}
              </button>
              {isProjectMenuOpen && (
                <ul className="submenu">
                  <li>
                    <Link to="/projects/prospector" onClick={closeMobileMenu}>Prospector</Link>
                  </li>
                  <li>
                    <Link to="/projects/tanteo" onClick={closeMobileMenu}>Prosjekt 2</Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/contact" onClick={closeMobileMenu}>{t("contact")}</Link>
            </li>
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