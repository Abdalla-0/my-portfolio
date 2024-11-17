import { Link } from "react-router-dom";
import BrandIcon from "@assets/svg/brand.svg?react";
const HeaderStart = () => {
  return (
    <Link className="logoContainer" to="/">
      <BrandIcon />
      <h2 className="brandName">Abdalla</h2>
      <span className="brandText">FREELANCER</span>
    </Link>
  );
};

export default HeaderStart;
