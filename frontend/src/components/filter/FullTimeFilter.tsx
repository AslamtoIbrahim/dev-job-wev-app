import { useState } from "react";
import Checkbox from "./Checkbox";
import { twMerge } from "tailwind-merge";

type FullTimeFilterProp = {
  className?: string;
  isFullTime: (value: boolean) => void;
};
const FullTimeFilter = ({ className, isFullTime }: FullTimeFilterProp) => {
  const [check, setCheck] = useState(false);
  const checkClick = () => {
    // const isFull = check ? true : false
    console.log('🤎 isFull :', !check);
    isFullTime(!check)
    setCheck((prev) => !prev);
  };
  return (
    <div
      onClick={checkClick}
      className={twMerge("flex items-center gap-x-2 p-2 cursor-pointer", className)}
    >
      <Checkbox isCheck={check} />
      <p className="font-kumbh dark:text-dark-title text-xs font-semibold capitalize">
        full time <span className="hidden lg:inline">only</span>
      </p>
    </div>
  );
};

export default FullTimeFilter;
