import { Col, Row } from "react-bootstrap";
import styles from "./style.module.css";
const { heroSection, heroEnd, subTitle, title, tale, contactBox, heroImg } =
  styles;
const HeroSection = () => {
  return (
    <div className={heroSection}>
      <Row>
        <Col md={6}>
          <h3 className={subTitle}>I am Abdalla</h3>
          <h2 className={title}>Web Developer & UI&UX Designer</h2>
          <p className={tale}>
            I create responsive websites with clean code and user-focused
            designs, combining technical skills with creativity to deliver
            functional and visually appealing solutions.
          </p>
          <div className={contactBox}></div>
        </Col>
        <Col md={6}>
          <div className={heroEnd}>
            <div className={heroImg}>
              <img src="../../../../src/assets/img/me.png" alt="" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
