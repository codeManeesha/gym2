
import React, {useEffect ,useState} from "react";
import Styles from "./PricingSection.module.css";
import { useNavigate } from "react-router-dom";
import pricing from "../../images/pricing.jpg";
import Background from "../../Components/Backround/Backround";
import { useRecoilValue } from "recoil";
import { isRefresh } from "../../Recoil";







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

      <div id="Pricing">
        <div className={Styles.large}>
          <h1 className={Styles.heading}>CHOOSE OUR PLANS</h1>
          <div className={Styles.main}>
            <div className={Styles.Free}>
              <h4>Free Pass</h4>
              <h1 className={Styles.dollers}>$0</h1>
              <h5>/Pass</h5>
              <ul className={Styles.list1}>
                <li>1 Day Pass</li>
                <li>Free Gym Access</li>
                <li>24 Hours Access</li>
                <li>Free Trial</li>
                <button onClick={handleJoin} className={Styles.button1}>
                  GET STARTED
                </button>
              </ul>
            </div>
            <div className={Styles.pass}>
              <h4>Day Pass</h4>
              <h1 className={Styles.dollers}>$20</h1>
              <h5>/Pass</h5>
              <ul className={Styles.list2}>
                <li>1 Day Pass</li>
                <li>Free Gym Access</li>
                <li>24 Hours Access</li>
                <button onClick={handleJoin} className={Styles.button2}>
                  GET STARTED
                </button>
              </ul>
            </div>
            <div className={Styles.monthly}>
              <h4>Month To Month</h4>
              <h1 className={Styles.dollers}>$99</h1>
              <h5>/Month</h5>
              <ul className={Styles.list3}>
                <li>$99 Joning Fee</li>
                <li>No Contract</li>
                <li>Free Gym Access</li>
                <li>1 Group Class Included</li>
                <li>24 Hours Access</li>
                <button onClick={handleJoin} className={Styles.button3}>
                  GET STARTED
                </button>
              </ul>
            </div>
            <div className={Styles.pass}>
              <h4>Year to Year</h4>
              <h1 className={Styles.dollers}>$299</h1>
              <h5>/Year</h5>
              <ul className={Styles.list4}>
                <li>$99 Joning Fee</li>
                <li>No Contract</li>
                <li>Free Gym Access</li>
                <li>1 Group Class Included</li>
                <li>24 Hours Access</li>
                <li>Any Time Support</li>
                <button onClick={handleJoin} className={Styles.button4}>
                  GET STARTED
                </button>
              </ul>
            </div>
          </div>
        </div>
        <div className={Styles.membership}>
          <h2>Membership</h2>
          <h3>-----</h3>
          <h2>From Punch Pass to Monthly or Annual</h2>
          <p>
            At Gym Base, we offer a wide range of membership with options to
            suit every budget. Everything from One Day Pass, Punch Pass to
            monthly or annual prepaid memberships. What's more, we won't tie you
            in to a long term contract, giving you greater flexibility.
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
    </div>
  );
}
export default PricingSection;
