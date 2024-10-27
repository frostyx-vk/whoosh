import style from "./index.module.scss";

import cl from "classnames";

import { ReactComponent as Facebook } from "./images/Facebook.svg";
import { ReactComponent as Instagram } from "./images/Instagram.svg";
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as Pin } from "./images/Pin.svg";
import { ReactComponent as Symbol } from "./images/Symbol.svg";
import { ReactComponent as Vector } from "./images/Vector.svg";
import { ReactComponent as Vk } from "./images/VK.svg";
import { ReactComponent as Youtube } from "./images/Youtube.svg";
import { ReactComponent as LogoAdapt } from "./images/logoAdapt.svg";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__mainTable}>
        <div className={style.footer__card1}>
          <span className={style.footer__cartHead}>About Whoosh</span>
          <p
            className={cl(style.footer__cardText, style.footer__cardTextAdapt)}
          >
            Express delivery of documents and parcels for organizations, express
            delivery of correspondence, purchases and other goods
          </p>
          <div className={style.footer__symbol}>
            <Symbol />
          </div>
        </div>
        <div className={style.footer__centerBlok}>
          <div className={cl(style.footer__card, style.footer__cardAdapt)}>
            <span
              className={cl(
                style.footer__cartHead,
                style.footer__cartHeadBorder
              )}
            >
              Menu
            </span>
            <p className={style.footer__cardText2}>
              <p>About company</p>
              <p>Contact</p>
              <p>Rules</p>
              <p>FAQ</p>
              <p>Reviews</p>
              <p>Cargo transportation</p>
              <p>Tariffs</p>
            </p>
          </div>
          <div className={cl(style.footer__card, style.footer__cardAdapt)}>
            <span
              className={cl(
                style.footer__cartHead,
                style.footer__cartHeadBorder
              )}
            >
              Services
            </span>
            <div className={style.footer__cardText2}>
              <p>Online stores</p>
              <p>Legal entity</p>
              <p>API Integration</p>
              <p>Contract</p>
              <p>Jobs</p>
              <p> Courier job</p>
              <p> The blog</p>
            </div>
          </div>
        </div>
        <div className={cl(style.footer__card, style.footer__cardAdapt2)}>
          <span
            className={cl(style.footer__cartHead, style.footer__cartHeadBorder)}
          >
            Contact us
          </span>
          <p className={style.footer__cardPhone}>8 800 934 5959</p>
          <div className={style.footer__cardAdr}>
            <div className={style.footer__cardPin}>
              <Pin />
            </div>
            <p className={style.footer__cardAdrText}>
              2545 W. Diversey Ave. 3rd Floor Chicago, IL 60647
            </p>
          </div>
          <div className={style.footer__social}>
            <Facebook />
            <Vk />
            <Youtube />
            <Instagram />
          </div>
        </div>
      </div>

      <div className={style.footer__separator}>
        <div className={style.footer__separatorLeft}></div>
        <p className={style.footer__separatorText}>Made by</p>
        <div className={style.footer__separatorRight}></div>
      </div>
      <div className={style.footer__logo}>
        <div className={style.footer__textCopy}>
          &copy; 2024. All rights reserved.
        </div>
        <div className={style.footer__logoSvg}>
          <Logo />
        </div>
        <div className={style.footer__logoSvgAdapt}>
          <LogoAdapt />
        </div>
        <div className={style.footer__privBlok}>
          <Vector />
          <span className={style.footer__priv}>Privacy policy</span>
        </div>
        <div className={style.footer__separatorLogo}>
          <div className={style.footer__separatorLeft}></div>
          <p className={style.footer__separatorText}>Made by</p>
          <div className={style.footer__separatorRight}></div>
        </div>
      </div>
    </footer>
  );
};
