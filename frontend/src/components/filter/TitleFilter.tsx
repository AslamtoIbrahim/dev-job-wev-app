import { twMerge } from "tailwind-merge"
import Input from "./Input"
import { FaSearch } from "react-icons/fa"

type TitleFilterProp = {
  className?: string
}
const TitleFilter = ({className}: TitleFilterProp) => {
  return (
    <div className={twMerge('flex-2 md:py-3 flex items-center gap-1', className)}>
      <FaSearch className="hidden md:block text-primary size-5"/>
      <Input placeHolder="Filter by title..." />
    </div>
  )
}

export default TitleFilter
