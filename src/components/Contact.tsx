import React from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="contact-container">
      <h2>{t("contactMe")}</h2>
      <ul>
        <li>
          <span className="icon">📞</span>
          <a href="tel:+4797435593">+47 97435593</a>
        </li>
        <li>
          <span className="icon">✉️</span>
          <a href="mailto:goldenellinor@gmail.com">goldenellinor@gmail.com</a>
        </li>
        <li>
          <span className="icon">🔗</span>
          <a href="https://linkedin.com/in/ellinor-golden-52044a204/" target="_blank" rel="noreferrer">
            linkedin.com/in/ellinor-golden
          </a>
        </li>
        <li>
          <span className="icon">🐙</span>
          <a href="https://github.com/ellinorgolden" target="_blank" rel="noreferrer">
            github.com/ellinorgolden
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact; 
