import { useState } from "react";
import Checkbox from "./Checkbox";

const FullTimeFilter = () => {
  const [check, setCheck] = useState(false);
  const checkClick = () => {
    setCheck((prev) => !prev);
  };
  return (
    <div onClick={checkClick} className="flex items-center gap-x-2">
      <Checkbox isCheck={check} />
      <p className="capitalize font-kumbh font-semibold text-xs">
        full time only
      </p>
    </div>
  );
};

export default FullTimeFilter;
