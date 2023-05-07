import React, { useEffect} from "react";
// import Styles from "./PricingSection.module.css";
import { useNavigate } from "react-router-dom";
import pricing from "../../images/pricing.jpg";
import { BsCalendarCheck } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import { ImFileVideo, ImNewspaper } from "react-icons/im";
import paisa from "./PricingSection.module.css";
import Background from "../../Components/Backround/Backround";
import { useRecoilValue } from "recoil";
import { isRefresh } from "../../Recoil";
import CustomButton from "../../Components/CUstom/CustomButton";

function PricingSection() {
  const navi = useNavigate();
  const Login = useRecoilValue(isRefresh);
  useEffect(() => {
    if (!Login) {
      navi("/");
    }
  }, []);

  function handleJoin() {
    if (window.confirm("Are you want to purchase the plan") === true) {
      alert("Plan Successfully added");
    } else {
      alert("You cancelled the plan");
    }
  }

  return (
    <div>
      <Background
        url={pricing}
        heading="Online Personal Training"
        desc="Maximum Results in Minimum Time, no matter your location"
      />
      <div className={paisa.main}>
        <div className={paisa.pricechart}>
          <div className={paisa.pricesection}>
            <div className={paisa.pricing}>
              <h1>₹ 1000</h1>
              <h4>
                1 <span>Month</span> TRAIL
              </h4>
            </div>
            <div className={paisa.heading}>
              <h4>₹ 2800 for 3 months thereafter and recurring</h4>
            </div>
            <div className={paisa.facility}>
              <p>
                <span>
                  <BsCalendarCheck />
                </span>
                <span>
                  2+1 <br />
                  Training <br />
                  Plans
                </span>
              </p>
              <p>
                <span>
                  <ImFileVideo />
                </span>
                <span>
                  60
                  <br />
                  How To
                  <br />
                  Videos
                </span>
              </p>
              <p>
                <span>
                  <ImNewspaper />
                </span>
                <span>
                  15
                  <br />
                  Plans
                </span>
              </p>
              <p>
                <span>
                  <RiUser3Line />
                </span>
                <span>
                  2+1 <br />
                  Training <br />
                  Plans
                </span>
              </p>
              <CustomButton
                btntxt="Buy Now"
                style={paisa.btnselect}
                onClick={handleJoin}
              />
            </div>
            <div className={paisa.plan}>
              <p>1-month pre-pay plan</p>
            </div>
          </div>
        </div>
        <div className={paisa.pricechart}>
          <div className={paisa.pricesection}>
            <div className={paisa.pricing}>
              <h1>₹ 1500</h1>
              <h4>
                1 <span>Month</span> TRAIL
              </h4>
            </div>
            <div className={paisa.heading}>
              <h4>₹ 3500 for 3 months thereafter and recurring</h4>
            </div>
            <div className={paisa.facility}>
              <p>
                <span>
                  <BsCalendarCheck />
                </span>
                <span>
                  4+2 <br />
                  Training <br />
                  Plans
                </span>
              </p>
              <p>
                <span>
                  <ImFileVideo />
                </span>
                <span>
                  80
                  <br />
                  How To
                  <br />
                  Videos
                </span>
              </p>
              <p>
                <span>
                  <ImNewspaper />
                </span>
                <span>
                  27
                  <br />
                  Plans
                </span>
              </p>
              <p>
                <span>
                  <RiUser3Line />
                </span>
                <span>
                  4+2 <br />
                  Training <br />
                  Plans
                </span>
              </p>
              <CustomButton
                btntxt="Buy Now"
                style={paisa.btnselect}
                onClick={handleJoin}
              />
            </div>
            <div className={paisa.plan}>
              <p>1-month pre-pay plan</p>
            </div>
          </div>
        </div>
        <div className={paisa.pricechart}>
          <div className={paisa.pricesection}>
            <div className={paisa.pricing}>
              <h1>₹ 2000</h1>
              <h4>
                1 <span>Month</span> TRAIL
              </h4>
            </div>
            <div className={paisa.heading}>
              <h4>₹ 5500 for 3 months thereafter and recurring</h4>
            </div>
            <div className={paisa.facility}>
              <p>
                <span>
                  <BsCalendarCheck />
                </span>
                <span>
                  6+2 <br />
                  Training <br />
                  Plans
                </span>
              </p>
              <p>
                <span>
                  <ImFileVideo />
                </span>
                <span>
                  150
                  <br />
                  How To
                  <br />
                  Videos
                </span>
              </p>
              <p>
                <span>
                  <ImNewspaper />
                </span>
                <span>
                  35
                  <br />
                  Plans
                </span>
              </p>
              <p>
                <span>
                  <RiUser3Line />
                </span>
                <span>
                  6+2 <br />
                  Training <br />
                  Plans
                </span>
              </p>
              <CustomButton
                btntxt="Buy Now"
                style={paisa.btnselect}
                onClick={handleJoin}
              />
            </div>
            <div className={paisa.plan}>
              <p>1-month pre-pay plan</p>
            </div>
          </div>
        </div>
      </div>
      <div className={paisa.membership}>
        <h2>Membership</h2>
        <h3>-----</h3>
        <h2>From Punch Pass to Monthly or Annual</h2>
        <p>
          At Gym Base, we offer a wide range of membership with options to suit
          every budget. Everything from One Day Pass, Punch Pass to monthly or
          annual prepaid memberships. What's more, we won't tie you in to a long
          term contract, giving you greater flexibility.
        </p>
        <h4>Each Plan Includes</h4>
        <ol>
          <li>The best equipment global brands</li>
          <li>The gym is open 24 hours a day, 7 days a week</li>
          <li>Two safe payment method</li>
          <li>Group fitness classes in the price of the subscription</li>
          <li>No long-term contract.period</li>
        </ol>
      </div>
    </div>
  );
}
export default PricingSection;
