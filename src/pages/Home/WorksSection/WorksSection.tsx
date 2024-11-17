import { Heading } from "@components/common";
import { Project } from "@components/ui";
import {  Container } from "react-bootstrap";
const WorksSection = () => {
  return (
    <div id="worksSection" className={`sectionArea withBG`}>
      <Container>
        <Heading title={"Recent Work"} />
        <Project/>
      </Container>
    </div>
  );
};

export default WorksSection;
