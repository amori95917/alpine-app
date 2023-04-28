import React from "react";
import styles from "./Header.module.scss";
import { useState } from "react";
import { NextPage } from "next";

const Header: NextPage = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);

  const openMenu = () => {
    setShowDiv(!showDiv);
    setShowMenuIcon(!showMenuIcon);
  };
  const closeMenu = () => {
    setShowDiv(!showDiv);
    setShowMenuIcon(!showMenuIcon);
  };
  return (
    <div id="header">
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="logo" />
        </div>
        <div id="menuButton" className={styles.menubutton}>
          {showMenuIcon && (
            <img id="menu_Btn" onClick={openMenu} src="/menu.png" alt="logo" />
          )}
        </div>
        {showDiv && (
          <div className={styles["openedMenu"]}>
            <div className={styles.closeButton}>
              <div className={styles.close}>
                Закрыть&nbsp;&nbsp;{" "}
                <img onClick={closeMenu} src="/close.png" alt="closeButton" />{" "}
              </div>
            </div>
            <div className={styles.submenu}>
              <a className={styles.menuLink} href="#case">
                Кейсы
              </a>
              <a className={styles.menuLink} href="#service">
                Услуги
              </a>
              <a className={styles.menuLink} href="#">
                Отзывы
              </a>
              <a className={styles.menuLink} href="#content">
                Контакты
              </a>
            </div>
            <div className={styles.contact}>
              <div className={styles.messenger1}>
                <div className={styles.arrowLink}>
                  telegram &nbsp;
                  <img src="/arrow.png" alt="tel-arrow" />
                </div>
              </div>
              <div className={styles.messenger2}>
                <div className={styles.arrowLink}>
                  alpine.std@gmail.com &nbsp;
                  <img src="/arrow.png" alt="tel-arrow" />
                </div>
                <div className={styles.arrowLink}>
                  whatsapp &nbsp;
                  <img src="/arrow.png" alt="tel-arrow" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
