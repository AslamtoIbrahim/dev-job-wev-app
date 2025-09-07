import { FaMoon, FaSun } from "react-icons/fa6";
import Switch from "./Switch";
import { isDarkMode, switchTheme } from "../../utils/theme";
import { useState } from "react";

const ThemeWrapper = () => {
  const [isDark, setIsDark] = useState(() => isDarkMode());
  const onSwitchTheme = () => {
    if(isDark) {
      localStorage.theme = "light";
    }else{
      localStorage.theme = "dark";
    }
    switchTheme()
    setIsDark(prev => !prev)
  };
  return (
    <div className="flex items-center gap-4">
      <FaSun className="text-white size-4"/>
      <Switch isOn={isDark} onSwitch={onSwitchTheme}/>
      <FaMoon className="text-white size-4 -rotate-16"/>
    </div>
  );
};

export default ThemeWrapper;
