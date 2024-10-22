import styles from "./style.module.css";
import HeaderEnd from "./HeaderEnd/HeaderEnd";
import HeaderMiddle from "./HeaderMiddle/HeaderMiddle";
import HeaderStart from "./HeaderStart/HeaderStart";
import { Container } from "react-bootstrap";

const { headerRow } = styles;
const Header = () => {
  return (
    <header>
      <Container>
        <div className={`${headerRow}`}>
          <HeaderStart />
          <HeaderMiddle />
          <HeaderEnd />
        </div>
      </Container>
    </header>
  );
};

export default Header;
