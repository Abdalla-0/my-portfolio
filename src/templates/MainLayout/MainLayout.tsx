import { Outlet } from "react-router-dom";
import { Header, Footer } from "@components/common/index";
import styles from "./style.module.css";

const { index, contentWrapper } = styles;
const MainLayout = () => {
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
