import React from "react";
import styles from "./Footer.module.scss";
import { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className={styles.footerContainer}>
          <div className={styles.sidebar}>
            <p className={styles.text1}>Давайте развивать ваш бизнес вместе!</p>
            <p className={styles.text2}>
              Не стесняйтесь спрашивать – обсудим ваши идеи и начнём воплощать
              их в эффективные digital-проекты.
            </p>
            <div className={styles.discuss}>
              <img src="/btn-discuss.png" alt="discussButton" />
            </div>
          </div>
          <div className={styles.contacts}>
            <div className={styles.messengers}>
              <p className={styles.messengerHeader}>Связаться с нами</p>
              <div className={styles.messengerBody}>
                <a className={styles.messengerType} href="#">
                  e-mail <img src="/arrow.png"></img>
                </a>
                <a className={styles.messengerType} href="#">
                  telegram <img src="/arrow.png"></img>
                </a>
                <a className={styles.messengerType} href="#">
                  whatsapp <img src="/arrow.png"></img>
                </a>
              </div>
            </div>
            <div className={styles.projects}>
              <p className={styles.messengerHeader}>Наши проекты</p>
              <div className={styles.messengerBody}>
                <a className={styles.messengerType} href="#">
                  vk <img src="/arrow.png"></img>
                </a>
                <a className={styles.messengerType} href="#">
                  behance <img src="/arrow.png"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyrightBox}>
          <p className={styles.copyright1}>alpine.studio © 2023</p>
          <p className={styles.copyright2}>
            Все права защищены 🞄 Политика конфиденциальности
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
