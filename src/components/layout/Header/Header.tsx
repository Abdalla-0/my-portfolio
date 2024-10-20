import { Badge } from "react-bootstrap";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
import HeaderEnd from "./HeaderEnd/HeaderEnd";

const { headerRow, firstRow } = styles;
const Header = () => {

  return (
    <header>
      <div className={`${headerRow}, ${firstRow}`}>
        <h1>
          <span>Our </span>
          <Badge as={NavLink} to={"/"} bg="warning">
            eCommerce
          </Badge>
        </h1>
        <HeaderEnd />
      </div>
    </header>
  );
};

export default Header;
