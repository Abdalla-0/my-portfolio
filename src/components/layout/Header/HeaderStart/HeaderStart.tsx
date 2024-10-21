import styles from "./style.module.css";
import { Link } from "react-router-dom";
const { headerStart } = styles;
const HeaderStart = () => {
  return (
    <Link className={headerStart} to="/">
      <h2>Abdalla</h2>
    </Link>
  );
};

export default HeaderStart;
