import { twMerge } from "tailwind-merge"
import Input from "./Input"
import { FaSearch } from "react-icons/fa"

type TitleFilterProp = {
  className?: string
  getsearchValue: (value: string) => void
}
const TitleFilter = ({className, getsearchValue}: TitleFilterProp) => {
  return (
    <div className={twMerge('flex-2 md:py-3 flex items-center gap-1', className)}>
      <FaSearch className="hidden md:block text-primary size-5"/>
      <Input getVlue={(value) => getsearchValue(value)} placeHolder="Filter by title, companies, expertize..." />
    </div>
  )
}

export default TitleFilter
