import React from "react";
import styles from "./Services.module.scss";
import { useState } from "react";
import { NextPage } from "next";

const Services: NextPage = () => {
  const [service, setService] = useState(true);

  const defaultComponent = (
    <>
      <div className={styles.serviceContent}>
        <div className={styles.designerPannel}>
          <img className={styles.designerImg} src="/designer2.png"></img>
        </div>
        <div className={styles.services}>
          <div className={styles.service1} onClick={() => setService(false)}>
            <p className={styles.serviceTitle1}>
              Комплексная разработка сайта / приложения / сервиса «под ключ»
            </p>
            <p className={styles.serviceContent1}>
              Мы предоставляем услуги по созданию сайтов, сервисов и приложений
              «под ключ». Это значит, что мы возьмем на себя все этапы создания
              проекта, начиная с дизайна и заканчивая запуском проекта в
              интернете.
            </p>
          </div>
          <div className={styles.service23}>
            <div className={styles.service2}>
              <p className={styles.serviceTitle2}>
                Маркетинг (SEO / Контекстная / Таргетированная реклама)
              </p>
              <p className={styles.serviceContent2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sit amet turpis justo. Pellentesque eget accumsan elit.
                Etiam lectus ex, ultrices vitae consequat eget, accumsan vel
                sem.{" "}
              </p>
            </div>
            <div className={styles.service2}>
              <p className={styles.serviceTitle2}>
                Разработка сайта / сервиса / приложения
              </p>
              <p className={styles.serviceContent2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sit amet turpis justo. Pellentesque eget accumsan elit.
                Etiam lectus ex, ultrices vitae consequat eget, accumsan vel
                sem.{" "}
              </p>
            </div>
          </div>
          <div className={styles.service45}>
            <div className={styles.service2}>
              <p className={styles.serviceTitle2}>
                Дизайн сайта / сервиса / приложения
              </p>
              <p className={styles.serviceContent2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sit amet turpis justo. Pellentesque eget accumsan elit.
                Etiam lectus ex, ultrices vitae consequat eget, accumsan vel
                sem.{" "}
              </p>
            </div>
            <div className={styles.service2}>
              <p className={styles.serviceTitle2}>Бизнес-услуги</p>
              <p className={styles.serviceContent2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sit amet turpis justo. Pellentesque eget accumsan elit.
                Etiam lectus ex, ultrices vitae consequat eget, accumsan vel
                sem.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const selectedComponent = (
    <>
      <div>
        <button className={styles.btnBack} onClick={() => setService(true)}>
          <img src="/Back.png"></img>
        </button>
        <div className={styles.selectedServiceContent}>
          <div className={styles.selectedServiceDescription}>
            <p className={styles.selectedServiceDescriptionTitle}>
              Разработка Landing Page «Под ключ»{" "}
            </p>
            <p className={styles.selectedServiceDescriptionContent}>
              Одностраничный сайт с упором на получение заявок. Рекомендуется
              заказывать в комплексе с месяцем продвижения.{" "}
            </p>
            <div className={styles.selectedServiceDescriptionNumbers}>
              <div className={styles.selectedServiceDescriptionNumber}>
                <p className={styles.selectedServiceDescriptionNumberTitle}>
                  Сроки
                </p>
                <p className={styles.selectedServiceDescriptionNumberDetail}>
                  от 20 дней
                </p>
              </div>
              <div className={styles.selectedServiceDescriptionNumber}>
                <p className={styles.selectedServiceDescriptionNumberTitle}>
                  от 20 дней
                </p>
                <p className={styles.selectedServiceDescriptionNumberDetail}>
                  от 60 тыс. руб.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.selectedServiceDescription}>
            <p className={styles.selectedServiceDescriptionTitle}>
              Разработка веб-сервиса «Под ключ»{" "}
            </p>
            <p className={styles.selectedServiceDescriptionContent}>
              Разрабатываем стартапы. Учитываем потребности пользователей и
              рынка. Помогаем реализовать MVP, а также продвинуть на
              акселлераторе
            </p>
            <div className={styles.selectedServiceDescriptionNumbers}>
              <div className={styles.selectedServiceDescriptionNumber}>
                <p className={styles.selectedServiceDescriptionNumberTitle}>
                  Сроки
                </p>
                <p className={styles.selectedServiceDescriptionNumberDetail}>
                  от 2 мес.
                </p>
              </div>
              <div className={styles.selectedServiceDescriptionNumber}>
                <p className={styles.selectedServiceDescriptionNumberTitle}>
                  от 20 дней
                </p>
                <p className={styles.selectedServiceDescriptionNumberDetail}>
                  от 300 тыс. руб.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.selectedServiceDescription}>
            <p className={styles.selectedServiceDescriptionTitle}>
              Разработка сайта на Wordpress / Bitrix{" "}
            </p>
            <p className={styles.selectedServiceDescriptionContent}>
              Разработка и дальнейшее сопровождения сайтов для B2B сегмента с
              удобной админ-панелью и сложным функционалом
            </p>
            <div className={styles.selectedServiceDescriptionNumbers}>
              <div className={styles.selectedServiceDescriptionNumber}>
                <p className={styles.selectedServiceDescriptionNumberTitle}>
                  Сроки
                </p>
                <p className={styles.selectedServiceDescriptionNumberDetail}>
                  от 1,5 мес.
                </p>
              </div>
              <div className={styles.selectedServiceDescriptionNumber}>
                <p className={styles.selectedServiceDescriptionNumberTitle}>
                  от 20 дней
                </p>
                <p className={styles.selectedServiceDescriptionNumberDetail}>
                  от 160 тыс. руб.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.selectedServiceDescription}>
            <p className={styles.selectedServiceDescriptionTitle}>
              Разработка приложения «Под ключ»{" "}
            </p>
            <p className={styles.selectedServiceDescriptionContent}>
              Приложения пользуются большей популярностью, чем веб-сервисы, так
              как их легко запустить и они всегда под рукой. Если у вас сервис -
              обязательно выберите этот вариант!
            </p>
            <div className={styles.selectedServiceDescriptionNumbers}>
              <div className={styles.selectedServiceDescriptionNumber}>
                <p className={styles.selectedServiceDescriptionNumberTitle}>
                  Сроки
                </p>
                <p className={styles.selectedServiceDescriptionNumberDetail}>
                  от 2,5 мес.
                </p>
              </div>
              <div className={styles.selectedServiceDescriptionNumber}>
                <p className={styles.selectedServiceDescriptionNumberTitle}>
                  от 20 дней
                </p>
                <p className={styles.selectedServiceDescriptionNumberDetail}>
                  от 350 тыс. руб.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.selectedServiceDescription}>
            <p className={styles.selectedServiceDescriptionTitle}>
              Разработка интернет-магазина «Под ключ»{" "}
            </p>
            <p className={styles.selectedServiceDescriptionContent}>
              Интернет-магазин с большим кол-вом функционала для большого числа
              товаров
            </p>
            <div className={styles.selectedServiceDescriptionNumbers}>
              <div className={styles.selectedServiceDescriptionNumber}>
                <p className={styles.selectedServiceDescriptionNumberTitle}>
                  Сроки
                </p>
                <p className={styles.selectedServiceDescriptionNumberDetail}>
                  от 1,5 мес.
                </p>
              </div>
              <div className={styles.selectedServiceDescriptionNumber}>
                <p className={styles.selectedServiceDescriptionNumberTitle}>
                  от 20 дней
                </p>
                <p className={styles.selectedServiceDescriptionNumberDetail}>
                  от 150 тыс. руб.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div id="service" className={styles.service}>
        <p className={styles.serviceTitle}>
          Мы будем полезны в вопросах <span>Маркетинга</span>
        </p>
        {service && defaultComponent}
        {!service && selectedComponent}
      </div>
    </>
  );
};

export default Services;
