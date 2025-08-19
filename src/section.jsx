import { useTranslation } from "react-i18next";
import ramen from "./img/ramen.png";
import "./section.css";
export default function Section() {
  const { t } = useTranslation();

  return (
      <div className="sectCont">
    <div className="container">
        <section className="section1">
          <div className="leftSide1">
            <h2>{t("sectionHeading")}</h2>
            <p>{t("sectionSubtitle")}</p>

            <div>
              <button>{t("delivery")}</button>
              <button>{t("pickup")}</button>
            </div>

            <div>
              <input type="text" placeholder={t("enterAddress")} />
              <button>{t("findFood")}</button>
            </div>
          </div>
          <div className="rightSide1">
            <img src={ramen} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
}
