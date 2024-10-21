import styles from "./style.module.css";
import HeaderEnd from "./HeaderEnd/HeaderEnd";
import HeaderMiddle from "./HeaderMiddle/HeaderMiddle";
import HeaderStart from "./HeaderStart/HeaderStart";

const { headerRow } = styles;
const Header = () => {
  return (
    <header>
      <div className={`${headerRow}`}>
        <HeaderStart />
        <HeaderMiddle />
        <HeaderEnd />
      </div>
    </header>
  );
};

export default Header;
