import { useState } from "react";

const Switch = () => {
    const [open, setOpen] = useState(false);
    const swichTheme = () => {
      setOpen(prev => !prev)
    };
  return (
    <div onClick={swichTheme} className="bg-gray-50 w-12 rounded-full p-1 cursor-pointer">
      <div className={`w-4 h-4 bg-primary rounded-full transition-transform ease-in-out duration-300 ${open ? 'translate-x-0' : 'translate-x-6'}`}></div>
    </div>
  )
}

export default Switch
