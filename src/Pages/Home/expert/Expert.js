import React from "react";
import team from "./expert.module.css";
import tr1 from'../../../images/daizy.jpg'
import tr2 from '../../../images/adam.jpg'
import tr3 from '../../../images/sam.jpg'
import tr4 from '../../../images/mark.jpg'

export default function Expert() {
  return (
    <div className={team.main_container}>
        <h4>OUR TEAM</h4>
        <h1>
          <span> Meet </span> our expert
        </h1>
     
      <div className={team.row}>
        <div class={team.trainer_col}>
          <img src={tr1} alt="trainer1" />
          <div class={team.layer}>
            <h2>Daizy</h2>
          </div>
        </div>
        <div class={team.trainer_col}>
          <img src={tr2} alt="trainer2" />
          <div class={team.layer}>
            <h2>Sam</h2>
          </div>
        </div>
        <div class={team.trainer_col}>
          <img src={tr3} alt="trainer3" />
          <div class={team.layer}>
            <h2>Adam</h2>
          </div>
        </div>
        <div class={team.trainer_col}>
          <img src={tr4} alt="trainer1" />
          <div class={team.layer}>
            <h2>Mark</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
