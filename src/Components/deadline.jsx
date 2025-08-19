import "./deadline.css";
import iconDead1 from "../img/deadLine1.png";
import iconDead2 from "../img/deadLine2.png";
import iconDead3 from "../img/deadLine3.png";
import { useTranslation } from "react-i18next";

function Deadline() {
  const { t } = useTranslation();

  return (
    <div className="deadLine">
      <div className="deadLineBox">
        <ul>
          <img src={iconDead1} alt="" />
          <p>{t("articleText1")}</p>
        </ul>
        <ul>
          <img src={iconDead2} alt="" />
          <p>{t("articleText2")}</p>
        </ul>
        <ul>
          <img src={iconDead3} alt="" />
          <p>{t("articleText3")}</p>
        </ul>
      </div>
    </div>
  );
}

export default Deadline;
