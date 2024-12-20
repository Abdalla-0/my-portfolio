import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.css";
import { Heading } from "@components/common";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
const {
  contactStart,
  heading,
  contactEnd,
  contactSocialBox,
  itemIcon,
  itemTitle,
} = styles;
const Contact = () => {
  return (
    <div id="contactSection" className={`sectionArea`}>
      <Container>
        <Row className="g-0 row-gap-5 justify-content-center">
          <Col md={6}>
            <div className={`${contactStart}`}>
              <Heading classExtra={`${heading}`} title={"Get In Toutch"} />
              <div className={`${contactSocialBox}`}>
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className={`btn btn-primary ${itemIcon}`}
                />
                <span className={`${itemTitle}`}>+20 1118125994</span>
              </div>
              <a
                href="https://www.linkedin.com/in/abdalla-atef-ba28b7273/"
                target="_blank"
                className={`${contactSocialBox}`}
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className={`btn btn-primary ${itemIcon}`}
                />
                <span className={`${itemTitle}`}>LinkedIn</span>
              </a>
              <a
                href={"https://github.com/Abdalla-0?tab=repositories"}
                target="_blank"
                className={`${contactSocialBox}`}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className={`btn btn-primary ${itemIcon}`}
                />
                <span className={`${itemTitle}`}>GitHub</span>
              </a>
            </div>
          </Col>
          <Col md={6} className="order-first order-md-0">
            <div className={`${contactEnd}`}>
              <div>
                <img
                  src="/contact.png"
                  className="img-fluid"
                  alt="Contact Image"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;




