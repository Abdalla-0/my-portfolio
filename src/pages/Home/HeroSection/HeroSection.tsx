import { Col, Container, NavLink, Row } from "react-bootstrap";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const {
  heroSection,
  heroStart,
  heroEnd,
  subTitle,
  title,
  tale,
  contactBox,
  heroImg,
  mobile,
  btnCV,
  btnIcon,
  socialsBox,
  socialItem,
} = styles;
const HeroSection = () => {
  return (
    <div className={`${heroSection}`}>
      <Container>
        <Row>
          <Col md={6}>
            <div className={heroStart}>
              <h3 className={subTitle}>I am Abdalla</h3>
              <h2 className={title}>Web Developer & UI&UX Designer</h2>
              <div className={`${heroImg} ${mobile}`}>
                <img src="../../../../src/assets/img/me.png" alt="" />
              </div>
              <p className={tale}>
                I create responsive websites with clean code and user-focused
                designs, combining technical skills with creativity to deliver
                functional and visually appealing solutions.
              </p>
              <div className={contactBox}>
                <NavLink className={`btn btn-outline-primary ${btnCV}`}>
                  Download CV
                  <span className={btnIcon}>
                    <FontAwesomeIcon icon={faDownload} />
                  </span>
                </NavLink>
                <div className={socialsBox}>
                  <NavLink className={`btn btn-outline-primary ${socialItem}`}>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </NavLink>
                  <NavLink className={`btn btn-outline-primary ${socialItem}`}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </NavLink>
                  <NavLink className={`btn btn-outline-primary ${socialItem}`}>
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </NavLink>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className={heroEnd}>
              <div className={heroImg}>
                <img src="../../../../src/assets/img/me.png" alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
