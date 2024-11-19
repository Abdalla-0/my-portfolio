import { Link } from "react-router-dom";
import BrandIcon from "@assets/svg/brand.svg?react";
const HeaderStart = () => {
  return (
    <Link className="logoContainer" to="/">
      <span className="brandIcon"><BrandIcon /></span>
      <h2 className="brandName">Abdalla</h2>
    </Link>
  );
};

export default HeaderStart;
