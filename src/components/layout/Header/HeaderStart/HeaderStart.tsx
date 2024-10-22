import styles from "./style.module.css";
import { Link } from "react-router-dom";
import BrandIcon from "@assets/svg/brand.svg?react";
const { headerStart, brandName, brandText } = styles;
const HeaderStart = () => {
  return (
    <Link className={headerStart} to="/">
      <BrandIcon />
      <h2 className={brandName}>Abdalla</h2>
      <span className={brandText}>FREELANCER</span>
    </Link>
  );
};

export default HeaderStart;
