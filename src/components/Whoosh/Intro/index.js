import style from "./index.module.scss";

import { ReactComponent as Online } from "./images/online.svg";
import { ReactComponent as Paperwork } from "./images/paperwork.svg";
import { ReactComponent as Payment } from "./images/payment.svg";
import { ReactComponent as Ir } from "./images/ir.svg";

export const Intro = () => {
  return (
    <div className={style.intro}>
      <div className={style.intro__intersect}></div>
      <span className={style.intro__headText}>What we do</span>
      <p className={style.intro__blockText}>
        Express courier service in the city. We are a reliable logistics partner
        for delivery services for online stores and restaurants!
      </p>
      <div className={style.intro__blokMain}>
        <div className={style.intro__card}>
          <div className={style.intro__circle}>
            <Online />
          </div>
          <p className={style.intro__cardHeadText}>
            Online{" "}
            <span className={style.intro__cardHeadTextBlue}>calculation</span>
          </p>

          <p className={style.intro__cardText}>
            Instant calculation of the cost in the order form, the price is
            updated in the process of filling out the form
          </p>
        </div>
        <div className={style.intro__card}>
          <div className={style.intro__circle}>
            <Paperwork />
          </div>
          <p className={style.intro__cardHeadText}>Minimum paperwork</p>
          <p className={style.intro__cardText}>
            You can place an order for courier or freight delivery without
            registration and contract.
          </p>
        </div>
        <div className={style.intro__card}>
          <div className={style.intro__circle}>
            <Payment />
          </div>
          <p className={style.intro__cardHeadText}>Convenient payment</p>
          <p className={style.intro__cardText}>
            You can pay for delivery by card or in cash at any of the order
            addresses. For legal entities non-cash is available.
            <span className={style.intro__ir}>
              <Ir />
            </span>
          </p>
        </div>
      </div>

      <button className={style.intro__button}>Get started!</button>
    </div>
  );
};
