import { Container } from "react-bootstrap";
import styles from "./style.module.css";
import { Heading } from "@components/common";
import Skill from "@components/ui/skill/Skill";
const { skillsSection } = styles;
const Skills = () => {
  return (
    <div className={`sectionArea withBG ${skillsSection}`}>
      <Container>
        <Heading title={"My Skills"} />
        <Skill />
      </Container>
    </div>
  );
};

export default Skills;
