import { faAppStore, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faQrcode } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button } from "react-bootstrap";
// Translation
import { useTranslation } from "react-i18next";
// Components
import AppItem from "../components/home/app";
import CoinItem from "../components/home/coinslist";
import Price from "../components/home/price";
import SupportItem from "../components/home/support";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="contents">
            <div className="content__1">
              <h1 className="content__title FirstDayNight">
                {t("header.title")}
              </h1>
              <h2 className="content__text SecondDayNight">
                {t("header.text")}
              </h2>
              <div className="content__button">
                <Button variant="warning">{t("registerNow")}</Button>
              </div>
            </div>
            <div className="content__2">
              <div className="coin__items">
                <Price />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="coins__list">
            {/* <CoinTable /> */}
            <h3 className="heading__text">{t("list.heading")}</h3>
            <div className="coin__items">
              <CoinItem />
            </div>
          </div>

          <div className="app__content">
            <h3 className="app__title">{t("app.heading")}</h3>
            <div className="app__box">
              <div className="app__pic">
                <img src="./img/svg/phone.svg" alt="" />
              </div>
              <div className="download__box">
                <AppItem
                  href="app/android"
                  icon={faGooglePlay}
                  title={t("app.googleplay")}
                />
                <AppItem
                  href="app/ios"
                  icon={faAppStore}
                  title={t("app.appstore")}
                />
                <AppItem
                  href="app/direct"
                  icon={faDownload}
                  title={t("app.directdownload")}
                />
                <AppItem
                  href="#barcode"
                  icon={faQrcode}
                  title={t("app.qrcode")}
                >
                  <div className="barcode__box">
                    <img src="/img/qr.png" alt="barcode app downloader" />
                  </div>
                </AppItem>
              </div>
            </div>
          </div>

          <div className="support__box">
            <SupportItem
              href="/support"
              src="./img/support/24hour.svg"
              title={t("support.title.24")}
              desc={t("support.text.24")}
            />
            <SupportItem
              href="/faq"
              src="./img/support/blog.svg"
              title={t("support.title.blog")}
              desc={t("support.text.blog")}
            />
            <SupportItem
              href="/profile/security"
              src="./img/support/security.svg"
              title={t("support.title.security")}
              desc={t("support.text.security")}
            />
            <SupportItem
              href="/exchange"
              src="./img/support/exchange.svg"
              title={t("support.title.exchange")}
              desc={t("support.text.exchange")}
            />
          </div>
        </div>

        <div className="join__box">
          <div className="container">
            <h4>{t("join.heading")}</h4>
            <div className="buttons">
              <Button variant="warning">{t("register")}</Button>
              <Button variant="warning">{t("start.trade.text")}</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
