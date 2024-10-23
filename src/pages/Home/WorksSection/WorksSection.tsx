import { Heading } from "@components/common";
import styles from "./style.module.css";
import { Project } from "@components/ui";
import { Col, Container, Row } from "react-bootstrap";
const { worksSection } = styles;
const WorksSection = () => {
  return (
    <div className={`sectionArea withBG ${worksSection}`}>
      <Container>
        <Heading title={"Our Recent Work"} />
        <Row>
          <Col md={6}>
            <Project />
          </Col>
          <Col md={6}>
            <Project />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WorksSection;
