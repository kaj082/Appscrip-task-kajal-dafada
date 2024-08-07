import React from "react";
import styles from "./TitleWithIcon.module.scss";
import { ArrowDown } from "@/src/icons";

const TitleWithIcon = ({ title }) => {
  return (
    <div className={styles.TitleWithIcon}>
      <p className={styles.title}>{title}</p>
      <ArrowDown />
    </div>
  );
};

export default TitleWithIcon;
