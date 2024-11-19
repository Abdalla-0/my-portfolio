import { Outlet } from "react-router-dom";
import { Header, Footer } from "@components/common/index";
import styles from "./style.module.css";
import { useEffect, useState } from "react";

const { index, contentWrapper } = styles;
const MainLayout = () => {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const navHeader = document.querySelector(".navHeader") as HTMLElement | null;
    if (navHeader) {
      setNavHeight(navHeader.offsetHeight);
      document.body.style.setProperty("--nav-height", `${navHeight}px`);
    }
  }, [navHeight]);

  return (
    
    <div id={index}>
      <Header />
      <div className={contentWrapper}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
