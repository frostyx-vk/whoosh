import style from "./index.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Icons from "./sprite.svg";
import "@splidejs/react-splide/css";
import cl from "classnames";

import { ReactComponent as Alpfa } from "./images/alfa.svg";
import { ReactComponent as Fagor } from "./images/fagor.svg";
import { ReactComponent as GuitaCenter } from "./images/guitaCenter.svg";
import { ReactComponent as RadioShack } from "./images/RadioShack.svg";
import { ReactComponent as Tendo } from "./images/tendo.svg";

export const Partners = () => {
  return (
    <div className={style.partners}>
      <div className={style.partners__headerBlock}>
        <span className={style.partners__headerText}>Our Partners</span>
        <div className={style.partners__lelColab}>
          <svg className={style.partners__briefcaseSvg}>
            <use xlinkHref={Icons + "#briefcase"}></use>
          </svg>
          <span className={style.partners__colabText}>Let's collaborate</span>
        </div>
      </div>
      <div className={style.partners__splide}>
        <Splide
          options={{
            width: 1104,
            type: "loop",
            perPage: 5,
            perMove: 1,
            focus: "center",
            pagination: false,
            arrows: false,
            wheel: true,
            drag: true,
            fixedWidth: "220px",
            wheelSleep: 50,
          }}
          aria-label="Partners"
          onInactive={() => {
            const slide1 = document.querySelectorAll(".splide__slide");
            for (let i = 0; i < slide1.length; i++) {
              const svgSearch = slide1[i].querySelector(".svg-search");
              if (svgSearch) {
                svgSearch.classList.add("splide__svg");
              }
            }
            const slide = document.querySelectorAll(
              ".splide__slide.is-visible.is-active"
            );
            for (let i = 0; i < slide.length; i++) {
              const svgSearch = slide[i].querySelector(".svg-search");
              svgSearch?.classList.remove("splide__svg");
            }
          }}
          onReady={() => {
            const slide = document.querySelectorAll(
              ".splide__slide.is-visible.is-active"
            );
            for (let i = 0; i < slide.length; i++) {
              const svgSearch = slide[i].querySelector(".svg-search");
              svgSearch?.classList.remove("splide__svg");
            }
          }}
        >
          <SplideSlide>
            <div className={cl(style.partners__slpideElem, "slide-search")}>
              <Alpfa className={cl("svg-search", "splide__svg")} />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={cl(style.partners__slpideElem, "slide-search")}>
              <Fagor className={cl("svg-search", "splide__svg")} />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={cl(style.partners__slpideElem, "slide-search")}>
              <GuitaCenter className={cl("svg-search", "splide__svg")} />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={cl(style.partners__slpideElem, "slide-search")}>
              <RadioShack className={cl("svg-search", "splide__svg")} />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={cl(style.partners__slpideElem, "slide-search")}>
              <Tendo className={cl("svg-search", "splide__svg")} />
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <div className={style.partners__lelColabAdapt}>
        <svg className={style.partners__briefcaseSvg}>
          <use xlinkHref={Icons + "#briefcase"}></use>
        </svg>
        <span className={style.partners__colabText}>Let's collaborate</span>
      </div>
    </div>
  );
};
