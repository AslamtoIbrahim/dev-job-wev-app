import { FaSearch } from "react-icons/fa"

const Search = () => {
  return (
    <div className="bg-primary w-fit p-3 md:p-0 rounded ">
      <FaSearch className="text-white  size-4 md:hidden"/>
      <p className="text-white py-2 px-6 font-kumbh hidden md:block">Search</p>
    </div>
  )
}

export default Search
