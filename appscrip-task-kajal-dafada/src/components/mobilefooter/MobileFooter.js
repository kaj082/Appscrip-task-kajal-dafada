import React from "react";
import TitleWithIcon from "../TitleWithIcon/TitleWithIcon";
import styles from "./MobileFooter.module.scss";
import { Payment, Usa, UsaFlag } from "@/src/icons";

const MobileFooter = () => {
  return (
    <div className={styles.MobileFooter}>
      <div className={styles.leftPart}>
        <h6 className={styles.title}>Be the first to know</h6>
        <p className={styles.description}>
          Sign up for updates from mettā muse.
        </p>
        <div className={styles.inputBtn}>
          <input
            type="text"
            placeholder="Enter your e-mail..."
            className={styles.input}
          />
          <button className={styles.btn}>Subscribe</button>
        </div>
      </div>
      <div className={styles.rightPart}>
        <h6 className={styles.title}>Call Us</h6>
        <div className={styles.detail}>
          <p className={styles.phone}>+44 221 133 5360</p>
          <div className={styles.star}></div>
          <p className={styles.email}>customercare@mettamuse.com</p>
        </div>
      </div>
      <div className={styles.part1}>
        <h6 className={styles.title}>Currency</h6>
        <div className={styles.detail}>
          <div className={styles.phone}>
            <Usa />
          </div>
          <div className={styles.star}></div>
          <p className={styles.email}>USA</p>
        </div>
      </div>
      <TitleWithIcon title={"mettā muse"} />
      <TitleWithIcon title={"Quick Links"} />
      <TitleWithIcon title={"Follow Us"} />
      <div className={styles.part5}>
        <h6 className={styles.title2}>mettā muse Accepts</h6>
        <Payment />
      </div>
      <p className={styles.copyText}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </div>
  );
};

export default MobileFooter;
