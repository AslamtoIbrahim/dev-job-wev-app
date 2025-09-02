import { FaMoon, FaSun } from "react-icons/fa6";
import Switch from "./Switch";

const ThemeWrapper = () => {
  return (
    <div className="flex items-center gap-4">
      <FaSun className="text-white size-4"/>
      <Switch />
      <FaMoon className="text-white size-4 -rotate-16"/>
    </div>
  );
};

export default ThemeWrapper;
