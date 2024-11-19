import { Col, Container,  Row } from "react-bootstrap";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

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
    <div id="heroSection" className={`${heroSection}`}>
      <Container>
        <Row>
          <Col lg={6}>
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
                <a
                  href={"/public/Abdalla Atef.pdf"}
                  target="_blank"
                  className={`btn btn-outline-primary ${btnCV}`}
                  download={"Abdalla Atef"}
                >
                  Download CV
                  <span className={btnIcon}>
                    <FontAwesomeIcon icon={faDownload} />
                  </span>
                </a>
                <div className={socialsBox}>
                  <a
                    href="https://www.linkedin.com/in/abdalla-atef-ba28b7273/"
                    target="_blank"
                    className={`btn btn-outline-primary ${socialItem}`}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    href={"https://github.com/Abdalla-0?tab=repositories"}
                    target="_blank"
                    className={`btn btn-outline-primary ${socialItem}`}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
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
