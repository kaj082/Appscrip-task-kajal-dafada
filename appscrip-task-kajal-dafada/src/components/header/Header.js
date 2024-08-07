import React from "react";
import styles from "./Header.module.scss";
import {
  Heart,
  HumbergerMenu,
  Language,
  Logo,
  MobileLogo,
  Profile,
  Search,
  ShoppingBag,
  TitleLogo,
} from "@/src/icons";

const Header = () => {
  return (
    <nav className={styles.Header} aria-label="main-navbar">
      <div className={styles.headerLine}>
        <TitleLogo />
        <TitleLogo />
        <TitleLogo />
      </div>
      <div className={styles.mobileheaderLine}>
        <TitleLogo />
      </div>
      <div className={styles.navbar}>
        <Logo />
        <p className={styles.logo}>LOGO</p>
        <ul className={styles.icons}>
          <li>
            <Search />
          </li>
          <li>
            <Heart />
          </li>
          <li>
            <ShoppingBag />
          </li>
          <li>
            <Profile />
          </li>
          <li>
            <Language />
          </li>
        </ul>
      </div>
      <div className={styles.mobilenavbar}>
        <div className={styles.navLogo}>
          <HumbergerMenu />
          <MobileLogo />
        </div>
        <p className={styles.logo}>LOGO</p>
        <ul className={styles.icons}>
          <li>
            <Search />
          </li>
          <li>
            <Heart />
          </li>
          <li>
            <ShoppingBag />
          </li>
        </ul>
      </div>
      <ul className={styles.navItems}>
        <li className={styles.navlist}>SHOP</li>
        <li className={styles.navlist}>SKILLS</li>
        <li className={styles.navlist}>STORIES</li>
        <li className={styles.navlist}>ABOUT</li>
        <li className={styles.navlist}>CONTACT US</li>
      </ul>
    </nav>
  );
};

export default Header;
