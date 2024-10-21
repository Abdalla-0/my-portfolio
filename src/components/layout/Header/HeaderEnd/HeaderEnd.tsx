import { Button, NavLink } from "react-bootstrap";
import styles from "./style.module.css";
const { headerEnd } = styles;
const HeaderEnd = () => {
  return (
    <div className={headerEnd}>
      <NavLink href="#contactSection">
        <Button>Hire Me</Button>
      </NavLink>
    </div>
  );
};

export default HeaderEnd;
