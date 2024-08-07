import { Heart, Like } from "@/src/icons";
import Image from "next/image";
import React, { useState } from "react";
import styles from './ProductDetail.module.scss'

const ProductDetail = () => {
  const [add, setAdd] = useState(false);
  const handleLike = () => {
    setAdd(!add);
  };
  return (
    <div className={styles.ProductDetail}>
      <div className={styles.imageContainer}>
        <p className={styles.tag}>new product</p>
        <p className={styles.outOfStock}>out of stock</p>
        <Image className={styles.image} width={300} height={399} />
      </div>
      <div className={styles.detail}>
        <div className={styles.desc}>
          <p className={styles.title}>
            PPXOC Milkyway dress in pressed flowers
          </p>
          <p className={styles.description}>
            <a href="/"> Sign in</a> or Create an account to see pricing
          </p>
        </div>
        <div className={styles.icon} onClick={handleLike}>
          {add ? <Like /> : <Heart />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
