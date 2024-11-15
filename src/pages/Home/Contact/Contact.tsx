import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.css";
import { Heading } from "@components/common";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
const {
  contactSection,
  contactSocial,
  contactSocialItem,
  itemIcon,
  itemTitle,
} = styles;
const Contact = () => {
  return (
    <div className={`sectionArea`}>
      <Heading title={"Get In Toutch"} />
      <Container>
        <Row className="g-0 justify-content-center">
          <Col xs={6}>
            <div className={`${contactSection}`}>
              <div>
                <img
                  src="/public/contact.png"
                  className="img-fluid"
                  alt="Contact Image"
                />
              </div>
              <div className={`${contactSocial}`}>
                <div className={`${contactSocialItem}`}>
                  <FontAwesomeIcon
                    icon={faPhoneVolume}
                    className={`btn btn-primary ${itemIcon}`}
                  />
                  <span className={`${itemTitle}`}>+20 1118125994</span>
                </div>
                <a
                  href="https://www.linkedin.com/in/abdalla-atef-ba28b7273/"
                  target="_blank"
                  className={`${contactSocialItem}`}
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
                  className={`${contactSocialItem}`}
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className={`btn btn-primary ${itemIcon}`}
                  />
                  <span className={`${itemTitle}`}>GitHub</span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
