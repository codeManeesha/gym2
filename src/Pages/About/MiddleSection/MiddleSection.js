import React from "react";
import styles from "./MiddleSection.module.css";
import image1 from "../../../images/image1.png";

export default function MiddleSection() {
  return (
    <div className={styles.main_container}>
      <div className={styles.left_section}>
        <h1>Facts</h1>
        <div className={styles.content}>
          <p className={styles.lbs}>141'702 lbs</p>
          <p className={styles.desc}>Fitness Club Client's Fat Lost to Date</p>
          <p className={styles.lbs}>141'702 lbs</p>
          <p className={styles.desc}>
            Fitness Club Client's Muscle to contract or shorten to Date
          </p>
        </div>
      </div>
      <div className={styles.right_section}>
        <img src={image1} alt="displaying"></img>
      </div>
    </div>
  );
}
