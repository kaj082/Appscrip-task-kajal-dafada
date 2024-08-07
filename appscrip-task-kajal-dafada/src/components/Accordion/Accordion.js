import React, { useState } from "react";
import styles from "./Accordion.module.scss";
import cx from "classnames";
import { ArrowDown } from "@/src/icons";

const Accordion = ({ title, linkText, optionArray }) => {
  const [selected, setSelected] = useState(false);
  const handleChange = () => {
    setSelected(!selected);
  };
  return (
    <div
      className={cx(styles.Accordion, { [styles.closeAccordion]: !selected })}
      onClick={handleChange}
    >
      <div className={styles.detailsContainer}>
        <div className={styles.title}>
          <p className={styles.titleText}>{title}</p>
          <div className={styles.downArrow}>
            <ArrowDown />
          </div>
        </div>
        <p className={styles.description}>All</p>
        {selected && (
          <div className={styles.desc}>
            <p className={styles.link}>{linkText}</p>
            <div className={styles.checkboxContainer}>
              {optionArray.map((item, index) => (
                <label className={styles.lable} key={`${index}+item`}>
                  <input
                    type="checkbox"
                    name="option1"
                    className={styles.input}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
