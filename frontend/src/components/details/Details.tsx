import { useQuery } from "@tanstack/react-query";
import { getJobByTitle } from "../../api/services";
import Header from "../head/Header";
import ApplyButton from "./ApplyButton";
import Description from "./Description";
import DijitalCard from "./DijitalCard";
import { useParams } from "react-router-dom";
import LoaderSpin from "../LoaderSpin";

const Details = () => {
  const { name } = useParams();
  // const decodedName =  decodeURIComponent(name || '')
  const { data, error, isPending } = useQuery({
    queryKey: ["jobDetail", name],
    queryFn: getJobByTitle,
  });

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="font-semibold text-red-500">{error.message}</p>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="col-span-3 flex h-screen items-center justify-center">
        <LoaderSpin />
      </div>
    );
  }

  const { logo, companyName, applyLink, title } = data;

  return (
    <div>
      <div className="back" />
      <Header />
      <div className="padx my-8 space-y-6 md:mt-6 xl:mt-0">
        <DijitalCard
          logo={logo}
          companyName={companyName}
          applyLink={applyLink}
        />
        <Description job={data} />
      </div>
      <div className="dark:bg-dark-card mt-6 bg-white py-4">
        <div className="padx md:flex md:items-center md:justify-between">
          <div className="hidden md:block">
            <p className="text-title dark:text-dark-title font-bold capitalize md:text-lg">
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
