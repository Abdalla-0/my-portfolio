import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
const { headerMiddle, navBox, linkItem } = styles;
const HeaderMiddle = () => {
  return (
    <div className={headerMiddle}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={navBox}>
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" className={linkItem}>
                Home
              </Nav.Link>
              <Nav.Link href="#workSection" className={linkItem}>
                Our Work
              </Nav.Link>
              <Nav.Link href="#skillsSection" className={linkItem}>
                Skills
              </Nav.Link>
              <Nav.Link href="#aboutSection" className={linkItem}>
                About
              </Nav.Link>
              <Nav.Link href="#contactSection" className={linkItem}>
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
