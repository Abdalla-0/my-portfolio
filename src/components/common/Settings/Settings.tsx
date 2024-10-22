import { useState } from "react";
import styles from "./style.module.css";
import SettingsIcon from "@assets/svg/settings.svg?react";
// styles
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
  const [colorName, setColorName] = useState("");
  const handleToggleMenu = () => {
    setIsMenu(!isMenu);
  };
  const siwtchColorHandler = (bgColor: string, textColor: string) => {
    document.body.style.setProperty("--color-primary", bgColor);
    document.body.style.setProperty("--color-text", textColor);
    setColorName(bgColor);
  };
  const colorNames = {
    yellow: "#ffb700",
    green: "#3d9e41",
    purple: "#673ab7",
    blue: "#2196F3",
    dark: "#2b3035",
    light: "#ffffff",
  };
  return (
    <div className={`${settingsMenu} ${isMenu ? show : null}`}>
      <span onClick={handleToggleMenu} className={settingsBtn}>
        <SettingsIcon className={settingsIcon} />
      </span>
      <div className={colorItemBox}>
        <span
          className={`${colorItem} ${yellow} ${
            colorName === colorNames.yellow
              ? active
              : colorName === ""
              ? active
              : null
          }`}
          onClick={() => siwtchColorHandler("#ffb700", colorNames.dark)}
        ></span>
        <span
          className={`${colorItem} ${green} ${
            colorName === colorNames.green ? active : null
          }`}
          onClick={() => siwtchColorHandler("#3d9e41", colorNames.light)}
        ></span>
        <span
          className={`${colorItem} ${purple} ${
            colorName === colorNames.purple ? active : null
          }`}
          onClick={() => siwtchColorHandler("#673ab7", colorNames.light)}
        ></span>
        <span
          className={`${colorItem} ${blue} ${
            colorName === colorNames.blue ? active : null
          }`}
          onClick={() => siwtchColorHandler("#2196F3", colorNames.light)}
        ></span>
      </div>
    </div>
  );
};

export default Settings;
