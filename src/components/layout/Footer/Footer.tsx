import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import BrandIcon from "@assets/svg/brand.svg?react";
const { footer,logoName, copyRights , copyRightsBrand } = styles;
const Footer = () => {
  return (
    <footer>
      <div className={footer}>
        <Link className={`logoContainer`} to="/">
          <BrandIcon />
          <h2 className={`${logoName}`}>Abdalla</h2>
        </Link>
        <div className={copyRights}>© 2024 <span className={copyRightsBrand}>ABDALLA</span>. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
