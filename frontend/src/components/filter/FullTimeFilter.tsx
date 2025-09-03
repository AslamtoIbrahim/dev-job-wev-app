import { useState } from "react";
import Checkbox from "./Checkbox";
import { twMerge } from "tailwind-merge";

type FullTimeFilterProp = {
  className?: string
}
const FullTimeFilter = ({className}:FullTimeFilterProp) => {
  const [check, setCheck] = useState(false);
  const checkClick = () => {
    setCheck((prev) => !prev);
  };
  return (
    <div onClick={checkClick} className={twMerge("flex items-center gap-x-2 p-2", className)}>
      <Checkbox isCheck={check} />
      <p className="capitalize font-kumbh font-semibold text-xs">
        full time <span className="hidden lg:inline">only</span>
      </p>
    </div>
  );
};

export default FullTimeFilter;
