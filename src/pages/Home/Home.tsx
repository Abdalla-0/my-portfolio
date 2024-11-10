import Settings from "@components/common/Settings/Settings";
import "./style.css";
import HeroSection from "./HeroSection/HeroSection";
import WorksSection from "./WorksSection/WorksSection";
import Ads from "./Ads/Ads";
import Skills from "@pages/Skills/Skills";

const Home = () => {
  return (
    <>
      <Settings />
      <HeroSection />
      <WorksSection />
      <Ads />
      <Skills />
    </>
  );
};

export default Home;
