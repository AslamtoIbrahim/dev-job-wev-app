import { useState } from "react";

type SwitchProp = {
  isOn: boolean,
  onSwitch: () => void
}
const Switch = ({isOn, onSwitch}: SwitchProp) => {
    const [open, setOpen] = useState(isOn);
    const swichTheme = () => {
      setOpen(prev => !prev)
      onSwitch()
    };
  return (
    <div onClick={swichTheme} className="bg-gray-50 w-12 rounded-full p-1 cursor-pointer">
      <div className={`w-4 h-4 bg-primary rounded-full transition-transform ease-in-out duration-300 ${open ? 'translate-x-6' : 'translate-x-0'}`}></div>
    </div>
  )
}

export default Switch
