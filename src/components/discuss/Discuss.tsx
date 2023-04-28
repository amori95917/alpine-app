import React from "react";
import styles from "./Discuss.module.scss";
import { NextPage } from "next";

const Discuss: NextPage = () => {
  return (
    <div id="Discuss" className={styles.DiscussContainer}>
      <div className={styles.Discuss}>
        <img className={styles.Line} src="/line.png" alt="line" />
        <div className={styles.text}>
          <img
            className={`${styles.moveRight}`}
            src="/descText.png"
            alt="descriptionText"
          />
        </div>
        <img className={styles.Line} src="/line.png" alt="line" />
      </div>
    </div>
  );
};

export default Discuss;
