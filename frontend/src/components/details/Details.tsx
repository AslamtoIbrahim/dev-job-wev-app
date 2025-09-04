import { jobs } from "../../../../backend/data";
import Header from "../head/Header";
import ApplyButton from "./ApplyButton";
import Description from "./Description";
import DijitalCard from "./DijitalCard";

const Details = () => {
  const {logo, companyName, applyLink, title} = jobs
  return (
    <div>
      <div className="back" />
      <Header />
      <div className="padx my-8 md:mt-6 xl:mt-0 space-y-6">
        <DijitalCard logo={logo} companyName={companyName} applyLink={applyLink} />
        <Description job={jobs} />
      </div>
      <div className=" dark:bg-dark-card mt-6 bg-white py-4 ">
        <div className="padx md:flex md:items-center md:justify-between">
          <div className="hidden md:block">
            <p className="text-title dark:text-dark-title font-bold md:text-lg capitalize">
              {title.toLowerCase()}
            </p>
            <p className="text-gray dark:text-dark-gray">{companyName}</p>
          </div>
          <ApplyButton className="w-full md:w-fit" />
        </div>
      </div>
    </div>
  );
};

export default Details;
