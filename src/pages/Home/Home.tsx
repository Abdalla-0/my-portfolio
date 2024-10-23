import Settings from "@components/common/Settings/Settings";
import "./style.css";
import HeroSection from "./HeroSection/HeroSection";
import WorksSection from "./WorksSection/WorksSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WorksSection />
      <Settings />
    </>
  );
};

export default Home;
