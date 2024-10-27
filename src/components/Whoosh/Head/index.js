import React, { useRef, useState } from "react";

import style from "./index.module.scss";
import cl from "classnames";
import Icons from "./sprite.svg";
import { ReactComponent as Menu } from "./images/menu.svg";
import { ReactComponent as Profile } from "./images/Profile.svg";
import { ReactComponent as MenuClose } from "./images/menuClose.svg";
import { ReactComponent as SearchMenu } from "./images/searchMenu.svg";

export const Head = () => {
  const hoverSech = useRef(null);
  const [searchIcon, setSearchIcon] = useState("#Search");
  const [menuOpen, setMenuOpen] = useState("");

  return (
    <header className={style.header}>
      <div className={cl(style.header__menuBlock, menuOpen)}>
        <div className={style.header__cityMenu}>
          <div className={style.header__cityNameMenu}>
            <svg className={style.header__citySvg}>
              <use xlinkHref={Icons + "#Pin"}></use>
            </svg>
            <div className={style.header__cityText}>NY, Manhattan</div>
          </div>
          <MenuClose onClick={() => setMenuOpen("")} />
        </div>
        <div className={style.header__searchMenu}>
          <input
            ref={hoverSech}
            placeholder="Track a Package"
            type="text"
            className={style.header__inputTextMenu}
          ></input>
          <SearchMenu />
        </div>
        <div className={style.header__linkBlokMenu}>
          <div className={style.header__textLink}>Send a Parcel</div>
          <div className={style.header__textLink}>Become a Courier</div>
          <div className={style.header__textLink}>Affiliate Program</div>
          <div className={style.header__textLink}>Help & Support</div>
        </div>
        <button className={style.header__buttonMenu}>
          Take a complex order
        </button>
      </div>
      <nav className={style.header__navigate}>
        <Profile className={style.header__profile} />
        <svg className={style.header__logo}>
          <use xlinkHref={Icons + "#Logo"}></use>
        </svg>
        <Menu
          onClick={() => setMenuOpen(style.header__menuBlockOpen)}
          className={style.header__menu}
        />
        <div className={style.header__city}>
          <svg className={style.header__citySvg}>
            <use xlinkHref={Icons + "#Pin"}></use>
          </svg>
          <div className={style.header__cityText}>NY, Manhattan</div>
        </div>
        <div
          onMouseDown={() => {
            setSearchIcon("#SearchActive");
          }}
          onMouseUp={() => {
            setSearchIcon("#Search");
          }}
          onMouseOver={() => {
            hoverSech.current.style.backgroundColor = "#f1f5ff";
          }}
          onMouseOut={() => {
            hoverSech.current.style.backgroundColor = "#fff";
          }}
          className={style.header__search}
        >
          <input
            ref={hoverSech}
            placeholder="Track a Package"
            type="text"
            className={style.header__inputText}
          ></input>
          <svg className={style.header__searchSvg}>
            <use xlinkHref={Icons + searchIcon}></use>
          </svg>
        </div>
        <div className={style.header__text}>
          <div className={style.header__textHeader}>Send a Parcel</div>
          <div className={style.header__textHeader}>Become a Courier</div>
        </div>
        <div className={style.header__login}>
          <svg className={style.header__loginSvg}>
            <use xlinkHref={Icons + "#Lock"}></use>
          </svg>
        </div>
      </nav>
      <div className={style.header__sepLine}></div>
    </header>
  );
};
