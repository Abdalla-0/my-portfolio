import { Button, Container } from "react-bootstrap";
import styles from "./style.module.css";
const { adsSection, content, text, title, tale, btnAction } = styles;
const Ads = () => {
  return (
    <div className={`sectionArea ${adsSection}`}>
      <Container>
        <div className={content}>
          <div className={text}>
            <h2 className={title}>Let’s Work together on your next Project</h2>
            <p className={tale}>
              I am available for freelance projects. Hire me and get your
              project done.
            </p>
          </div>
          <Button className={btnAction}>Let’s get in touch</Button>
        </div>
      </Container>
    </div>
  );
};

export default Ads;
