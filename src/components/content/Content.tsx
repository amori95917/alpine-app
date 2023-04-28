import React, { useState } from "react";
import styles from "./Content.module.scss";
import Header from "../header/Header";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { NextPage } from "next";

const Content: NextPage = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(!show);
    }, 5000);
  }, []);

  return (
    <div>
      {/* {show && (
        <div className={styles.contentContainer}>
          <Image
            className={styles.vector}
            src="/images/landingPage/content/vector.png"
            alt="vector"
            width={100}
            height={100}
          />
          <div className={styles.loader}></div>
        </div>
      )} */}
      <div id="content" className={styles.content}>
        <Header />
        <div className={styles.textDesigner}>
          <div className={styles.textPart}>
            <Image
              src="/images/landingPage/content/titleText.png"
              alt="titleText"
              width={1000}
              height={1000}
              className={styles.titleText}
            />
            <Image
              src="/images/landingPage/content/mediumText.png"
              alt="mediumText"
              width={650}
              height={45}
              className={styles.mediumText}
            />
          </div>
          <div className={styles.designerPart}>
            <div className={styles.designer}>
              <Image
                src="/images/landingPage/content/designer.png"
                alt="designer"
                width={770}
                height={815}
                className={styles.designerImage}
              />
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/landingPage/content/line.png"
            alt="line"
            height={2}
            width={1850}
            className={styles.line}
          />
        </div>
        <div className={styles.discussButton}>
          <div>
            <Image
              src="/images/landingPage/content/smallText.png"
              alt="smallText"
              height={100}
              width={600}
              className={styles.smallText}
            />
          </div>
          <div>
            <Link href="#Discuss">
              <Image
                src="/images/landingPage/content/button.png"
                alt="button"
                width={250}
                height={50}
                className={styles.button}
              />
            </Link>
          </div>
        </div>
        <div className={styles.numbers}>
          <Image
            src="/images/landingPage/content/numbers.png"
            alt="numbers"
            width={1200}
            className={styles.numbersImage}
            height={500}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Content;
