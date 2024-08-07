import React from "react";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.HeroSection}>
      <div className={styles.main}>
        <div className={styles.subSection}>
          <p className={styles.home}>HOME</p>
          <div className={styles.line}></div>
          <p className={styles.shop}>SHOP</p>
        </div>
        <h2 className={styles.title}>DISCOVER OUR PRODUCTS</h2>
        <h3 className={styles.subTitle}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </h3>
      </div>
    </div>
  );
};

export default HeroSection;
