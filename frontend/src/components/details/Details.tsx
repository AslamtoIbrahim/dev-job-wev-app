import Header from "../head/Header";
import ApplyButton from "./ApplyButton";
import Description from "./Description";
import DijitalCard from "./DijitalCard";

const Details = () => {
  return (
    <div>
      <div className="back" />
      <Header />
      <div className="padx my-8 md:mt-6 xl:mt-0 space-y-6">
        <DijitalCard />
        <Description />
      </div>
      <div className=" dark:bg-dark-card mt-6 bg-white py-4 ">
        <div className="padx md:flex md:items-center md:justify-between">
          <div className="hidden md:block">
            <p className="text-title dark:text-dark-title font-bold md:text-lg">
              Haskell and PureScript Dev
            </p>
            <p className="text-gray dark:text-dark-gray">copany name</p>
          </div>
          <ApplyButton className="w-full md:w-fit" />
        </div>
      </div>
    </div>
  );
};

export default Details;
