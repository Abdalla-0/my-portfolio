import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faImages,
  faLightbulb,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
const { headerMiddle, navBox, linkItem, linkIcon } = styles;
const HeaderMiddle = () => {
  return (
    <div className={`${headerMiddle} navHeader`}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav" className={`${navBox}`}>
            <Nav className="me-auto">
              <Nav.Link href="#heroSection" className={`${linkItem} d-sm-none`}>
                <FontAwesomeIcon icon={faHouseUser} className={linkIcon} />
                Home
              </Nav.Link>
              <Nav.Link href="#worksSection" className={linkItem}>
                <FontAwesomeIcon icon={faImages} className={linkIcon} />
                Our Work
              </Nav.Link>
              <Nav.Link href="#skillsSection" className={linkItem}>
                <FontAwesomeIcon icon={faLightbulb} className={linkIcon} />
                Skills
              </Nav.Link>
              <Nav.Link href="#contactSection" className={linkItem}>
                <FontAwesomeIcon icon={faPhoneVolume} className={linkIcon} />
                Contact Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderMiddle;
