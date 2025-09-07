import { useState } from "react";
import FullTimeFilter from "./FullTimeFilter";
import LocationFilter from "./LocationFilter";
import Search from "./Search";
import ShowFilters from "./ShowFilters";
import TitleFilter from "./TitleFilter";
import { useJobContext } from "../../../hooks/useJobContext";

const Filter = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [schedule, setSchedule] = useState("");
  const jobContext = useJobContext();

  const setIsfullTime = (value: boolean) => {
    console.log("💛 value: ", value);
    if (value) {
      setSchedule("full-time");
      return;
    }
    setSchedule("");
  };

  const showHideFilters = () => {
    setIsFilterVisible((prev) => !prev);
  };

  const onSearchClick = () => {
    const query = {
      search: search,
      location: location,
      schedule: schedule,
    };
    jobContext.addQuery(query);
  };

  return (
    <div className="padx mt-6 xl:mt-1">
      <div
        className={`dark:bg-dark-card flex items-center gap-6 rounded bg-white p-3 shadow-xl/3 transition-all duration-75 ease-out md:px-4 md:py-0 ${isFilterVisible ? "h-36" : "h-16"}`}
      >
        <div
          className={`divide-dark-gray/30 flex flex-col md:flex-row md:gap-x-2 lg:flex-2 ${isFilterVisible ? "divide-y" : "divide-y-0"} md:divide-x-1`}
        >
          <TitleFilter
            getsearchValue={(value) => setSearch(value)}
            className="lg:flex-3"
          />
          <LocationFilter
            getLocation={(value) => setLocation(value)}
            className={`md:flex ${isFilterVisible ? "flex" : "hidden"}`}
          />
          <FullTimeFilter
            isFullTime={setIsfullTime}
            className={`md:flex ${isFilterVisible ? "flex" : "hidden"}`}
          />
        </div>
        <ShowFilters showClick={showHideFilters} />
        <Search searchClick={onSearchClick} />
      </div>
    </div>
  );
};

export default Filter;
