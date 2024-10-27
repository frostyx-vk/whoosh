import React, { useState } from "react";
import cl from "classnames";
import style from "./index.module.scss";

import Icons from "./sprite.svg";
import { ReactComponent as I } from "./images/i.svg";
import { ReactComponent as Vector } from "./images/Vector.svg";
import { ReactComponent as Pagging } from "./images/Pagging.svg";

export const Pad = () => {
  const [activeSwitch1, setActiveSwitch1] = useState("");
  const [activeSwitch2, setActiveSwitch2] = useState(style.pad__active);
  const [activeSwitch3, setActiveSwitch3] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [activeSwitchText1, setActiveSwitchText1] = useState("");
  const [activeSwitchText2, setActiveSwitchText2] = useState(
    style.pad__switchTextActive
  );
  const [activeSwitchText3, setActiveSwitchText3] = useState("");

  return (
    <div className={style.pad}>
      <div className={style.pad__backgroundImg}>
        <svg className={style.pad__citySvg}>
          <use xlinkHref={Icons + "#city"}></use>
        </svg>
        <svg className={style.pad__statueSvg}>
          <use xlinkHref={Icons + "#statue"}></use>
        </svg>
        <svg className={style.pad__flameSvg}>
          <use xlinkHref={Icons + "#flame"}></use>
        </svg>
        <svg className={style.pad__cloud1Svg}>
          <use xlinkHref={Icons + "#cloud_1"}></use>
        </svg>
        <svg className={style.pad__cloud2Svg}>
          <use xlinkHref={Icons + "#cloud_2"}></use>
        </svg>
      </div>
      <div className={style.pad__mainBlokFlex}>
        <div className={style.pad__blokLeft}>
          <p className={style.pad__text1}>
            Our service started work in New York
          </p>
          <p className={style.pad__text2}>
            We make delivery exactly at the time you need - we can start to
            fulfill the order a few minutes after it arrives, or we can deliver
            on a specific day and hour.
          </p>
          <p className={style.pad__readMore}>
            Read more
            <svg className={style.pad__rightarrowSvg}>
              <use xlinkHref={Icons + "#rightarrow"}></use>
            </svg>
          </p>
          <p className={style.pad__text3}>How it works</p>
          <div className={style.pad__img}></div>
          <Pagging className={style.pad__pagging} />
        </div>
        <div className={style.pad__blokRight}>
          <div className={style.pad__sendParcel}>
            <div className={style.pad__sendParcelHeader}>
              <p className={style.pad__sendParcelHeaderText}>Send a Parcel</p>
              <I className={style.pad__iSvg} />
              <span className={style.pad__tooltip}>
                A commission is a piece of work that someone is asked to do and
                is paid for.
              </span>
            </div>
            <div className={style.pad__tab}>
              <div
                onClick={() => {
                  setActiveSwitch1(style.pad__active);
                  setActiveSwitch2("");
                  setActiveSwitch3("");
                  setActiveSwitchText1(style.pad__switchTextActive);
                  setActiveSwitchText2("");
                  setActiveSwitchText3("");
                }}
                className={cl(style.pad__switch1, activeSwitch1)}
              >
                <svg className={style.pad__OnFootSvg}>
                  <use xlinkHref={Icons + "#OnFoot"}></use>
                </svg>
                <p className={cl(style.pad__switchText, activeSwitchText1)}>
                  up to 10lb
                </p>
              </div>
              <div
                onClick={() => {
                  setActiveSwitch1("");
                  setActiveSwitch2(style.pad__active);
                  setActiveSwitch3("");
                  setActiveSwitchText1("");
                  setActiveSwitchText2(style.pad__switchTextActive);
                  setActiveSwitchText3("");
                }}
                className={cl(style.pad__switch2, activeSwitch2)}
              >
                <svg className={style.pad__CarSvg}>
                  <use xlinkHref={Icons + "#Car"}></use>
                </svg>
                <p className={cl(style.pad__switchText, activeSwitchText2)}>
                  up to 130lb
                </p>
              </div>
              <div
                onClick={() => {
                  setActiveSwitch1("");
                  setActiveSwitch2("");
                  setActiveSwitch3(style.pad__active);
                  setActiveSwitchText1("");
                  setActiveSwitchText2("");
                  setActiveSwitchText3(style.pad__switchTextActive);
                }}
                className={cl(style.pad__switch3, activeSwitch3)}
              >
                <svg className={style.pad__TruckSvg}>
                  <use xlinkHref={Icons + "#Truck"}></use>
                </svg>
                <p className={cl(style.pad__switchText, activeSwitchText3)}>
                  over 130lb
                </p>
              </div>
            </div>
            <div className={style.pad__inputLoc}>
              <div className={style.pad__inputLocInBlock}>
                <div className={style.pad__vector}>
                  <Vector />
                </div>

                <svg className={style.pad__PinSvg}>
                  <use xlinkHref={Icons + "#Pin"}></use>
                </svg>
                <div
                  className={cl(
                    style.pad__inputLocIn,
                    style.pad__inputLocInBorder1
                  )}
                >
                  <p className={style.pad__inputLocText}>Pickup location</p>
                  <input
                    onChange={(e) => {
                      setPickupLocation(e.target.value);
                    }}
                    value={pickupLocation}
                    className={style.pad__inputLocInput}
                    type="text"
                    placeholder="location"
                  ></input>
                </div>
              </div>
              <div className={style.pad__inputLocInBlock}>
                <svg className={style.pad__PinSvg}>
                  <use xlinkHref={Icons + "#Pin2"}></use>
                </svg>
                <div
                  className={cl(
                    style.pad__inputLocIn,
                    style.pad__inputLocInBorder2
                  )}
                >
                  <p className={style.pad__inputLocText}>Drop location</p>
                  <input
                    onChange={(e) => {
                      setDropLocation(e.target.value);
                    }}
                    value={dropLocation}
                    className={style.pad__inputLocInput2}
                    type="text"
                    placeholder="502 86th St, Brooklyn, NY 11209"
                  ></input>
                </div>
              </div>
            </div>
            <button className={style.pad__buttonOrder}>Order</button>
            <div className={style.pad__buttonCancelBlock}>
              <svg className={style.pad__cancelSvg}>
                <use xlinkHref={Icons + "#cancel"}></use>
              </svg>
              <button
                onClick={() => {
                  setPickupLocation("");
                  setDropLocation("");
                }}
                className={style.pad__buttonCancel}
              >
                Clear All
              </button>
            </div>
          </div>

          <div className={style.pad__inputTrack}>
            <p className={style.pad__inputTrackText}>Track a package</p>
            <div className={style.pad__inputTrackBlok}>
              <input
                type="text"
                placeholder="Enter code"
                className={style.pad__inputTrackInput}
              ></input>
              <svg className={style.pad__SearchSvg}>
                <use xlinkHref={Icons + "#Search"}></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
