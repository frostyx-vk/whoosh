import style from "./index.module.scss";
import cl from "classnames";
import Icons from "./sprite.svg";

export const Info = () => {
  return (
    <div className={style.info}>
      <span className={style.info__heading}>
        Express delivery market revolution
      </span>
      <p className={style.info__text}>
        Express courier service in the city. We are a reliable logistics partner
        for delivery services for online stores and restaurants!
      </p>
      <div className={style.info__blokPad}>
        <div className={cl(style.info__pad, style.info__pad1)}>
          <span className={style.info__header}>Become a Courier</span>
          <div className={style.info__padSvgBlock}>
            <div className={style.info__circle}>
              <svg className={style.info__courierSvg}>
                <use xlinkHref={Icons + "#courier"}></use>
              </svg>
            </div>
            <svg className={style.info__routeSvg}>
              <use xlinkHref={Icons + "#route"}></use>
            </svg>
          </div>
          <p className={style.info__padText}>
            You choose a schedule. You decide how much and when to earn.
            Earnings from day one
          </p>
        </div>
        <div className={cl(style.info__pad, style.info__pad2)}>
          <span className={style.info__header}>Help & Support</span>
          <div className={style.info__padSvgBlock}>
            <div className={style.info__circle}>
              <svg className={style.info__courierSvg}>
                <use xlinkHref={Icons + "#support"}></use>
              </svg>
            </div>
          </div>
          <p className={style.info__padText}>
            Door-to-door delivery <br /> in 90 minutes or at your convenience
          </p>
        </div>
        <div className={cl(style.info__pad, style.info__pad3)}>
          <span className={style.info__header}>Affiliate Program</span>
          <div className={style.info__padSvgBlock}>
            <div className={style.info__circle}>
              <svg className={style.info__courierSvg}>
                <use xlinkHref={Icons + "#briefcase"}></use>
              </svg>
            </div>
          </div>
          <p className={style.info__padText}>
            Use our service and feel <br /> new quality of this traditional
            service!
          </p>
        </div>
      </div>
    </div>
  );
};
