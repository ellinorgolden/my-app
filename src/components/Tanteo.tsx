import { useTranslation } from "react-i18next";

const Tanteo = () => {
   const { t } = useTranslation();
   
    return (
      <div>
        <header>
        <h1>Prosjekt 2</h1>
        </header>   
      <p>{t("tanteoInfo")}</p>
    </div>
    
    )
  };
  
  export default Tanteo