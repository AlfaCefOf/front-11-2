import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import logo1 from "./img/Logo.png";
import search from "./img/Search.png";
import "./header.css";
export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem("appLanguage", newLang);
  };

  return (
    <div className="container">
      <header>
        <div className="leftHeader">
          <img src={logo1} alt="" />
        </div>
        <div className="rightHeader">
          <label>
            <select onChange={changeLanguage} value={i18n.language}>
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="uz">Uzbek</option>
            </select>
          </label>
          <div className="searchLine">
            <img src={search} alt="" />
            <p>{t("rightHeader")}</p>
          </div>
          <button className="login">
            <i class="fas fa-user"></i>Login
          </button>
        </div>
      </header>
    </div>
  );
}
