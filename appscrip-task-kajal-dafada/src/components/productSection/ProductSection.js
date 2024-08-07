import React, { useState } from "react";
import RecommendedDropDown from "../RecommendedDropDown/RecommendedDropDown";
import { ArrowLeft } from "@/src/icons";
import ProductDetail from "../productDetail/ProductDetail";
import styles from "./ProductSection.module.scss";
import cx from "classnames";

const ProductSection = () => {
  const [show, setShow] = useState(false);
  const handleFilteClick = () => {
    setShow(!show);
  };
  const filterDetail = [
    {
      title: "IDEAL FOR",
      optionArray: ["Men", "Women", "Baby & Kids"],
    },
    {
      title: "occasion",
      optionArray: ["Men", "Women", "Baby & Kids"],
    },
    {
      title: "work",
      optionArray: ["Men", "Women", "Baby & Kids"],
    },
    {
      title: "fabric",
      optionArray: ["Men", "Women", "Baby & Kids"],
    },
    {
      title: "segment",
      optionArray: ["Men", "Women", "Baby & Kids"],
    },
    {
      title: "suitable for",
      optionArray: ["Men", "Women", "Baby & Kids"],
    },
    {
      title: "raw materials",
      optionArray: ["Men", "Women", "Baby & Kids"],
    },

    {
      title: "Pattern",
      optionArray: ["Men", "Women", "Baby & Kids"],
    },
  ];

  return (
    <div className={styles.ProductSection}>
      <div className={styles.header}>
        <div className={styles.left}>
          <p className={styles.totalItem}>3425 Items</p>
          <div className={styles.btn} onClick={handleFilteClick}>
            <ArrowLeft />
            <button className={styles.btnText}>HIDE FILTER</button>
          </div>
        </div>
        <p className={styles.filterText}>FILTER</p>
        <RecommendedDropDown />
      </div>
      <div className={styles.product}>
        <div className={cx(styles.sideDrawer, { [styles.show]: !show })}>
          <label className={styles.lable}>
            <input type="checkbox" name="option1" className={styles.input} />
            Customizble
          </label>
        </div>
        <div className={styles.productList}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <ProductDetail key={`${item}index`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
