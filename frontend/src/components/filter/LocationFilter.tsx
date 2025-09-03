import { FaLocationDot } from "react-icons/fa6"
import { twMerge } from "tailwind-merge"
import Input from "./Input"

type LocationFilterProp = {
  className?: string
}

const LocationFilter = ({className}: LocationFilterProp) => {
  return (
    <div className={twMerge('flex-2 md:py-3 flex items-center gap-1', className)}>
      <FaLocationDot className="hidden md:block text-primary size-5"/>
      <Input placeHolder="Filter by location..." />
    </div>
  )
}

export default LocationFilter
