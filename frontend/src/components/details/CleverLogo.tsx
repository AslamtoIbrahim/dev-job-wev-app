import { FastAverageColor } from "fast-average-color";
import { useEffect, useState } from "react";

type CleverLogoProps = {
  logSrc: string | null;
};

const CleverLogo = ({ logSrc }: CleverLogoProps) => {
  const [bgColor, setbgColor] = useState("#fff");

  useEffect(() => {
    const fac = new FastAverageColor();
    fac
      .getColorAsync(logSrc ? logSrc : "/public/joblogo.png")
      .then((color) => {
        setbgColor(color.hex);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [logSrc]);


  return (
    <div style={{ backgroundColor: bgColor }} className={` absolute -top-6 flex size-14 items-center justify-center rounded-xl md:static md:size-30 md:rounded-none md:rounded-tl md:rounded-bl `}>
      <img
        className="rounded-xl"
        src={logSrc ? logSrc : "/public/joblogo.png"}
        alt="logo"
      />
    </div>
  );
};

export default CleverLogo;
