import { useEffect, useState } from "react";
import styles from "./style.module.css";
import SettingsIcon from "@assets/svg/settings.svg?react";
import { useAppDispatch, useAppSelector } from "@store/hook";
import { setTheme } from "@store/theme/themeSlice";

const Settings = () => {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const [isMenu, setIsMenu] = useState(false);
  const handleToggleMenu = () => {
    setIsMenu(!isMenu);
  };


  const siwtchColorHandler = (bgColor: string, textColor: string) => {
    dispatch(setTheme({ bgColor, textColor }));
    document.body.style.setProperty("--color-primary", bgColor);
    document.body.style.setProperty("--color-text", textColor);
  };
  const colorNames = {
    yellow: "#ffb700",
    green: "#3d9e41",
    purple: "#673ab7",
    blue: "#2196F3",
    dark: "#2b3035",
    light: "#ffffff",
  };

  useEffect(()=> {
    document.body.style.setProperty("--color-primary", theme.bgColor);
    document.body.style.setProperty("--color-text", theme.textColor);
  },[theme])
  return (
    <div className={`${styles.settingsMenu} ${isMenu ? styles.show : null}`}>
      <span onClick={handleToggleMenu} className={styles.settingsBtn}>
        <SettingsIcon className={styles.settingsIcon} />
      </span>
      <div className={styles.colorItemBox}>
        <span
          className={`${styles.colorItem} ${styles.yellow} ${
            theme.bgColor === colorNames.yellow ? styles.active : ""
          }`}
          onClick={() => siwtchColorHandler(colorNames.yellow, colorNames.dark)}
        ></span>
        <span
          className={`${styles.colorItem} ${styles.green} ${
            theme.bgColor === colorNames.green ? styles.active : ""
          }`}
          onClick={() => siwtchColorHandler(colorNames.green, colorNames.light)}
        ></span>
        <span
          className={`${styles.colorItem} ${styles.purple} ${
            theme.bgColor === colorNames.purple ? styles.active : ""
          }`}
          onClick={() => siwtchColorHandler(colorNames.purple, colorNames.light)}
        ></span>
        <span
          className={`${styles.colorItem} ${styles.blue} ${
            theme.bgColor === colorNames.blue ? styles.active : ""
          }`}
          onClick={() => siwtchColorHandler(colorNames.blue, colorNames.light)}
        ></span>
      </div>
    </div>
  );
};

export default Settings;
