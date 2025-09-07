import { FaSearch } from "react-icons/fa"
type SearchProp = {
  searchClick: () => void
}
const Search = ({searchClick}: SearchProp) => {
  return (
    <button onClick={searchClick} className="bg-primary w-fit p-3 md:p-0 rounded cursor-pointer hover:bg-primary-violet ">
      <FaSearch className="text-white  size-4 md:hidden"/>
      <p className="text-white py-2 px-6 md:px-4 lg:px-6 font-kumbh hidden md:block">Search</p>
    </button>
  )
}

export default Search
