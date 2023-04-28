import React from "react";
import styles from "./Cases.module.scss";
import { NextPage } from "next";
import Image from "next/image";

const Cases: NextPage = () => {
  return (
    <div id="case" className={styles.casesContainer}>
      <div className={styles.cases}>
        <div className={styles.text}>
          <p>Проекты, которыми мы гордимся</p>
        </div>
        <div>
          <Image
            src="/images/landingPage/cases/line.png"
            alt="line"
            width={1920}
            height={0}
            className={styles.line}
          />
        </div>
        <div className={styles.firstCase}>
          <div className={styles.firstCaseType}>
            <p>Fullstack-разработка</p>
          </div>
          <div className={styles.firstCaseContent}>
            <div className={styles.firstCaseContentBox}>
              <div className={styles.CaseContentTopBox}>
                <div className={styles.firstCaseContentTopic}>
                  <p>Refocus</p>
                </div>
                <div className={styles.CaseContentYear}>
                  <p>2022</p>
                </div>
              </div>
              <div className={styles.CaseContentDownBox}>
                <p className={styles.CaseContentTitle}>Путеводитель по IT</p>
                <div>
                  <Image
                    className={styles.arrow}
                    src="/images/landingPage/cases/arrow.png"
                    alt="arrow"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.caseContainer}>
          <div className={styles.secondCase}>
            <div className={styles.secondCaseType}>
              <p>Сайт «Под ключ»</p>
            </div>
            <div className={styles.secondCaseContent}>
              <div className={styles.secondCaseContentBox}>
                <div className={styles.CaseContentTopBox}>
                  <div className={styles.secondCaseContentTopic}>
                    <p>Medica Mente</p>
                  </div>
                  <div className={styles.CaseContentYear}>
                    <p>2022</p>
                  </div>
                </div>
                <div className={styles.CaseContentDownBox}>
                  <p className={styles.CaseContentTitle}>
                    Cтоматологическая клиника
                  </p>
                  <div>
                    <Image
                      className={styles.arrow}
                      src="/images/landingPage/cases/arrow.png"
                      alt="arrow"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thirdCase}>
            <div className={styles.thirdCaseTop}>
              <div className={styles.thirdCaseType}>
                <p>Бизнес-партнёр</p>
              </div>
              <div className={styles.thirdCaseContentYear}>
                <p>2023</p>
              </div>
            </div>
            <div className={styles.thirdCaseDown}>
              <p>В разработке</p>
            </div>
          </div>
        </div>
        <div className={styles.fourthCase}>
          <div className={styles.fourthCaseType}>
            <p>Сайт «Под ключ»</p>
          </div>
          <div className={styles.firstCaseContent}>
            <div className={styles.firstCaseContentBox}>
              <div className={styles.CaseContentTopBox}>
                <div className={styles.firstCaseContentTopic}>
                  <p>Югвидео</p>
                </div>
                <div className={styles.CaseContentYear}>
                  <p>2022</p>
                </div>
              </div>
              <div className={styles.CaseContentDownBox}>
                <p className={styles.CaseContentTitle}>
                  Компания, занимающаяся системами безопасности
                </p>
                <div>
                  <Image
                    className={styles.arrow}
                    src="/images/landingPage/cases/arrow.png"
                    alt="arrow"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
