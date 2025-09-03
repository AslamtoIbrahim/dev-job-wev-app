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
      <div className="bg-white rounded p-3 shadow-xl/3 flex justify-between items-center gap-2">
        <div className="flex flex-col gap-y-3">
          <TitleFilter />
          <div
            className={`flex-col gap-y-3  ${
              isFilterVisible ? "flex" : "hidden"
            }`}
          >
            <hr className="text-dark-gray/50" />
            <LocationFilter />
            <hr className="text-dark-gray/50" />
            <FullTimeFilter />
          </div>
        </div>
        <ShowFilters showClick={showHideFilters} />
        <Search />
      </div>
    </div>
  );
};

export default Filter;
