import Settings from "@components/common/Settings/Settings";
import HeroSection from "./HeroSection/HeroSection";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <Settings />
    </Container>
  );
};

export default Home;
