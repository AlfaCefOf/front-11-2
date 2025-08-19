import { useTranslation } from "react-i18next";
import "./footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-sections">
        <div>
          <h4>{t("company")}</h4>
          <ul>
            <li>{t("aboutUs")}</li>
            <li>{t("team")}</li>
            <li>{t("careers")}</li>
            <li>{t("blog")}</li>
          </ul>
        </div>

        <div>
          <h4>{t("contact")}</h4>
          <ul>
            <li>{t("helpSupport")}</li>
            <li>{t("partner")}</li>
            <li>{t("ride")}</li>
          </ul>
        </div>

        <div>
          <h4>{t("legal")}</h4>
          <ul>
            <li>{t("terms")}</li>
            <li>{t("refund")}</li>
            <li>{t("privacy")}</li>
            <li>{t("cookies")}</li>
          </ul>
        </div>

        <div className="footer-subscribe">
          <h4>{t("followUs")}</h4>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
          <p>{t("subscribeText")}</p>
          <div className="subscribe-box">
            <input type="email" placeholder={t("enterEmail")} />
            <button>{t("subscribeBtn")}</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
