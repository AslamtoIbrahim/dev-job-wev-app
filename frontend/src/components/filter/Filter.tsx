import { useState } from "react";
import FullTimeFilter from "./FullTimeFilter";
import LocationFilter from "./LocationFilter";
import Search from "./Search";
import ShowFilters from "./ShowFilters";
import TitleFilter from "./TitleFilter";

const Filter = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const showHideFilters = () => {
    setIsFilterVisible((prev) => !prev);
  };
  return (
    <div className="padx mt-6">
      <div className={`bg-white rounded p-3 md:px-4 md:py-0 shadow-xl/3 flex justify-between items-center gap-3 transition-all duration-75 ease-out
        ${isFilterVisible ? 'h-36' : 'h-16'}`}>
        <div className={`flex flex-col divide-dark-gray/30 md:flex-row md:gap-x-2 
        
          ${isFilterVisible ? 'divide-y' : 'divide-y-0 '} md:divide-x-1`}>
            <TitleFilter />
            <LocationFilter className={`md:flex ${isFilterVisible ? 'flex' : 'hidden'}`} />
            <FullTimeFilter className={`md:flex ${isFilterVisible ? 'flex' : 'hidden'}`}/>
        </div>
        <ShowFilters showClick={showHideFilters} />
        <Search />
      </div>
    </div>
  );
};

export default Filter;
