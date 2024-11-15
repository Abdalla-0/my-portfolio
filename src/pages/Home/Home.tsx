import Settings from "@components/common/Settings/Settings";
import "./style.css";
import HeroSection from "./HeroSection/HeroSection";
import WorksSection from "./WorksSection/WorksSection";
import Ads from "./Ads/Ads";
import Skills from "@pages/Home/Skills/Skills";
import Contact from "@pages/Home/Contact/Contact";

const Home = () => {
  return (
    <>
      <Settings />
      <HeroSection />
      <WorksSection />
      <Ads />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
