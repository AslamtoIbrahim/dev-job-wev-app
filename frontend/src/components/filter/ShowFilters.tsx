import { FaFilter } from "react-icons/fa6"


type ShowFiltersProp = {
  showClick: () => void
}

const ShowFilters = ({showClick}: ShowFiltersProp) => {
   
  return (
    <div onClick={() => showClick()} className="p-1 cursor-pointer">
      <FaFilter className="text-gray size-5" />
    </div>
  )
}

export default ShowFilters
