import style from "./index.module.scss";

import Icons from "./sprite.svg";

export const Separator = () => {
  return (
    <div className={style.separator}>
      <div className={style.separator__lineLeft}></div>
      <svg className={style.separator__boxSvg}>
        <use xlinkHref={Icons + "#box"}></use>
      </svg>
      <div className={style.separator__lineRight}></div>
    </div>
  );
};
