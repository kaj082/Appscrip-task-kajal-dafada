import React, { useState } from "react";
import RecommendedDropDown from "../RecommendedDropDown/RecommendedDropDown";
import { ArrowLeft } from "@/src/icons";
import ProductDetail from "../productDetail/ProductDetail";
import styles from "./ProductSection.module.scss";
import cx from "classnames";
import Accordion from "../Accordion/Accordion";
import { useProductStore } from "@/src/store/ProductStore";

const ProductSection = () => {
  const products = useProductStore((state) => state.products);
  const [show, setShow] = useState(false);
  const handleFilteClick = () => {
    setShow(!show);
  };
  const filterDetail = [
    {
      title: "IDEAL FOR",
      optionArray: ["Men", "Women", "Baby & Kids"],
      linkText: "Unselect all",
    },
    {
      title: "occasion",
      optionArray: ["Men", "Women", "Baby & Kids"],
      linkText: "Unselect all",
    },
    {
      title: "work",
      optionArray: ["Men", "Women", "Baby & Kids"],
      linkText: "Unselect all",
    },
    {
      title: "fabric",
      optionArray: ["Men", "Women", "Baby & Kids"],
      linkText: "Unselect all",
    },
    {
      title: "segment",
      optionArray: ["Men", "Women", "Baby & Kids"],
      linkText: "Unselect all",
    },
    {
      title: "suitable for",
      optionArray: ["Men", "Women", "Baby & Kids"],
      linkText: "Unselect all",
    },
    {
      title: "raw materials",
      optionArray: ["Men", "Women", "Baby & Kids"],
      linkText: "Unselect all",
    },

    {
      title: "Pattern",
      optionArray: ["Men", "Women", "Baby & Kids"],
      linkText: "Unselect all",
    },
  ];

  return (
    <div className={styles.ProductSection}>
      <div className={styles.header}>
        <div className={styles.left}>
          <p className={styles.totalItem}>{products.length} Items</p>
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
          {filterDetail.map((item, index) => (
            <Accordion
              linkText={item.linkText}
              optionArray={item.optionArray}
              title={item.title}
              key={`${item.title}index`}
            />
          ))}
        </div>
        <div className={styles.productList}>
          {products.map((item, index) => (
            <ProductDetail
              key={`${item}index`}
              data={item}
              newProduct={index == 0}
              outOfStock={index == 6}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
