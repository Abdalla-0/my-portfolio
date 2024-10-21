import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
const { headerMiddle } = styles;
const HeaderMiddle = () => {
  return (
    <div className={headerMiddle}>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link href="#workSection">Our Work</Nav.Link>
              <Nav.Link href="#skillsSection">Skills</Nav.Link>
              <Nav.Link href="#aboutSection">About</Nav.Link>
              <Nav.Link href="#contactSection">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderMiddle;
