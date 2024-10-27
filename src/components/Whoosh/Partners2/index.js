import style from "./index.module.scss";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import cl from "classnames";

import { ReactComponent as Amex } from "./images/pmx-logo-amex.svg";
import { ReactComponent as Mastercard } from "./images/pmx-logo-mastercard.svg";
import { ReactComponent as Paywithgoogle } from "./images/pmx-logo-paywithgoogle 1.svg";
import { ReactComponent as Sofort } from "./images/pmx-logo-sofort.svg";
import { ReactComponent as Union } from "./images/pmx-logo-union-pay 1.svg";
import { ReactComponent as Visa } from "./images/pmx-logo-visa.svg";
import { ReactComponent as Right } from "./images/Right.svg";
import { useEffect } from "react";
import { useState } from "react";

export const Partners2 = () => {
  const [gap, setGap] = useState("103px");
  window.addEventListener("resize", () => {
    if (window.innerWidth < 361) {
      setGap("80px");
    } else {
      setGap("103px");
    }
  });

  return (
    <div className={style.partners}>
      <span className={style.partners__headerText}>Payment methods</span>
      <div className={style.partners__splide}>
        <Splide
          options={{
            width: "1024px",
            type: "loop",
            perPage: 5,
            gap: gap,
            focus: "first",
            pagination: false,
            arrows: true,
            wheel: true,
            drag: true,
            fixedWidth: "85px",
            wheelSleep: 50,
          }}
          aria-label="Partners"
          hasTrack={false}
        >
          <SplideTrack>
            <SplideSlide>
              <Amex />
            </SplideSlide>
            <SplideSlide>
              <Mastercard />
            </SplideSlide>
            <SplideSlide>
              <Paywithgoogle />
            </SplideSlide>
            <SplideSlide>
              <Sofort />
            </SplideSlide>
            <SplideSlide>
              <Union />
            </SplideSlide>
            <SplideSlide>
              <Visa />
            </SplideSlide>
          </SplideTrack>
          <div className="splide__arrows">
            <button
              className={cl(
                "splide__arrow splide__arrow--prev",
                style.partners__arrowPrev
              )}
            >
              <Right />
            </button>
            <button
              className={cl(
                "splide__arrow splide__arrow--next",
                style.partners__arrowNext
              )}
            >
              <Right />
            </button>
          </div>
        </Splide>
      </div>
    </div>
  );
};
