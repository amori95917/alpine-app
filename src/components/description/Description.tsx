import React from "react";
import styles from "./Description.module.scss";
import { NextPage } from "next";

const Description: NextPage = () => {
  return (
    <div id="Description" className={styles.descriptionContainer}>
      <div className={styles.description}>
        Мы делаем не только узкие задачи по дизайну и разработке 💻, но и в
        🧨дальнейшем занимаемся продвижением 💡 и налаживанием бизнес-процессов
        в компании.
      </div>
    </div>
  );
};

export default Description;
