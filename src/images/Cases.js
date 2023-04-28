import React from "react";
import styles from "./Cases.module.scss";

const Cases = () => {
  return (
    <div id="cases" className={styles.casesContainer}>
      <div className={styles.cases}>
        <div className={styles.text}>
          <img src="/cases/text.png" alt="text" />
        </div>
        <div className={styles.line}>
          <img src="/cases/line.png" alt="line" />
        </div>
        <div className={styles.case1}>
          <div className={styles.button1}>
            <img src="/cases/type.png" alt="text1" />
          </div>
          <div className={styles.textfieldContainer}>
            <div className={styles.textfield}>
              <div className={styles.textfieldTop}>
                <img src="/cases/Refocus.png" alt="title" />
                <img src="/cases/Year.png" alt="title" />
              </div>
              <div className={styles.textfieldDown}>
                <img src="/cases/text1.png" alt="title" />
                <img src="/cases/arrow.png" alt="title" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.caseContainer}>
          <div className={styles.case2}></div>
          <div className={styles.case3}></div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
