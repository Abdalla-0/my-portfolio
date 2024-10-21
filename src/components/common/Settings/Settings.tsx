import { useState } from "react";
import styles from "./style.module.css";
import SettingsIcon from "@assets/svg/settings.svg?react";
const {
  settingsMenu,
  settingsBtn,
  settingsIcon,
  show,
  active,
  colorItemBox,
  colorItem,
  yellow,
  green,
  purple,
  blue,
} = styles;
const Settings = () => {
  const [isMenu, setIsMenu] = useState(false);
  const handleToggleMenu = () => {
    setIsMenu(!isMenu);
  };
  const siwtchColorHandler = (bgColor: string, textColor: string) => {
    document.body.style.setProperty("--color-primary", bgColor);
    document.body.style.setProperty("--color-text", textColor);
  };
  const dark = "#2b3035";
  const light = "#ffffff";
  return (
    <div className={`${settingsMenu} ${isMenu ? show : null}`}>
      <span onClick={handleToggleMenu} className={settingsBtn}>
        <SettingsIcon className={settingsIcon} />
      </span>
      <div className={colorItemBox}>
        <span
          className={`${colorItem} ${yellow} ${active}`}
          onClick={() => siwtchColorHandler("#ffb700", dark)}
        ></span>
        <span
          className={`${colorItem} ${green}`}
          onClick={() => siwtchColorHandler("#3d9e41", light)}
        ></span>
        <span
          className={`${colorItem} ${purple}`}
          onClick={() => siwtchColorHandler("#673ab7", light)}
        ></span>
        <span
          className={`${colorItem} ${blue}`}
          onClick={() => siwtchColorHandler("#2196F3", light)}
        ></span>
      </div>
    </div>
  );
};

export default Settings;
