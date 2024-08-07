import React from "react";
import styles from "./Footer.module.scss";
import { Insta, Linkdin, Payment, UsaFlag } from "@/src/icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.upperCOntainer}>
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
          <h6 className={styles.title}>CONTACT US</h6>
          <p className={styles.phone}>+44 221 133 5360</p>
          <p className={styles.email}>customercare@mettamuse.com</p>
          <h6 className={styles.title}>Currency</h6>
          <UsaFlag />
          <p className={styles.desc}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </section>
      <section className={styles.lowerContainer}>
        <div className={styles.part1}>
          <h6 className={styles.title}>mettā muse</h6>
          <ul className={styles.itemList}>
            <li className={styles.item}>About Us</li>
            <li className={styles.item}>Stories</li>
            <li className={styles.item}>Artisans</li>
            <li className={styles.item}>Boutiques</li>
            <li className={styles.item}>Contact Us</li>
            <li className={styles.item}>EU Compliances Docs</li>
          </ul>
        </div>
        <div className={styles.part2}>
          <h6 className={styles.title}>Quick Links</h6>
          <ul className={styles.itemList}>
            <li className={styles.item}>Orders & Shipping</li>
            <li className={styles.item}>Join/Login as a Seller</li>
            <li className={styles.item}>Payment & Pricing</li>
            <li className={styles.item}>Return & Refunds</li>
            <li className={styles.item}>FAQs</li>
            <li className={styles.item}>Privacy Policy</li>
            <li className={styles.item}>Terms & Conditions</li>
          </ul>
        </div>
        <div className={styles.part3}>
          <h6 className={styles.title}>Follow Us</h6>
          <div className={styles.icons}>
            <Insta />
            <Linkdin />
          </div>
          <h6 className={styles.title2}>mettā muse Accepts</h6>
          <Payment />
        </div>
      </section>
      <p className={styles.copyText}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
