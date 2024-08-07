import React, { useState } from "react";
import styles from "./RecommendedDropDown.module.scss";
import { ArrowDown, Check } from "@/src/icons";
import cx from "classnames";
import { useProductStore } from "@/src/store/ProductStore";
import { sortProducts } from "@/src/helper/generalHelper";

const RecommendedDropDown = () => {
  const { products, setProducts } = useProductStore((state) => ({
    products: state.products,
    setProducts: state.setProducts,
  }));
  const tags = [
    "Recommended",
    "Newest first",
    "Popular",
    "Price : high to low",
    "Price : low to high",
  ];

  const [active, setActive] = useState(0);
  const [show, setShow] = useState(false);

  const handleActive = (index) => {
    setActive(index);
    const data = sortProducts(products, tags[index]);
    setProducts(data);
    setShow(false); // Optionally close the dropdown on selection
  };

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className={styles.RecommendedDropDown}>
      <div className={styles.mainContainer}>
        <div className={styles.container} onClick={handleClick}>
          <p className={styles.title}>RECOMMENDED</p>
          <div className={cx(styles.arrow, { [styles.downArrow]: show })}>
            <ArrowDown />
          </div>
        </div>
        <div className={cx(styles.menu, { [styles.show]: show })}>
          {tags.map((item, index) => (
            <div
              className={styles.listItem}
              key={`${index}item`}
              onClick={() => handleActive(index)}
            >
              {active === index && <Check />}
              <p
                className={cx(styles.title, {
                  [styles.active]: active === index,
                })}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedDropDown;
