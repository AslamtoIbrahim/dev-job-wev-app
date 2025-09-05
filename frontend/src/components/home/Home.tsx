import { jobs } from "../../../../backend/data";
import Filter from "../filter/Filter";
import Header from "../head/Header";
import JobCard from "./JobCard";
import LoadButton from "./LoadButton";

const Home = () => {
  return (
    <div>
      <div className="back" />
      <Header />
      <Filter />
      <div className="padx my-12 space-y-10 md:mt-14 md:mb-0 md:grid md:grid-cols-2 md:gap-x-2 lg:grid-cols-3 lg:gap-x-4 xl:grid-cols-4">
        <JobCard job={jobs}/>
      </div>
      <div className="flex w-full justify-center pb-8">
        <LoadButton />
      </div>
    </div>
  );
};

export default Home;
