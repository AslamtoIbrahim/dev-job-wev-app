import type { ApplyLink } from "../../utils/types";
import CompanyButton from "./CompanyButton";

type DijitalCardProp = {
  logo: string | null;
  companyName: string;
  applyLink: ApplyLink[];
};
const DijitalCard = ({logo, companyName, applyLink} : DijitalCardProp) => {
  return (
    <div className="dark:bg-dark-card shadow-dark-gray relative flex flex-col items-center gap-y-6 rounded bg-white py-8 shadow-2xl/10 md:flex-row md:gap-x-8 md:py-0 md:pr-10 dark:shadow-xs">
      <div className="bg-primary absolute -top-6 flex size-14 items-center justify-center rounded-xl md:static md:size-30 md:rounded-none md:rounded-tl md:rounded-bl">
        <img className="rounded-xl" src={logo ? logo : "/public/vite.svg"} alt="company logo" />
      </div>
      <div className="font-kumbh md: mt-4 text-center md:mt-0 md:flex-3 md:text-start">
        <p className="text-title dark:text-dark-title text-lg/6 font-semibold capitalize">
          {companyName.toLowerCase()}
        </p>
        <p className="text-gray dark:text-dark-gray">{applyLink[0].title}</p>
      </div>
      <CompanyButton />
    </div>
  );
};

export default DijitalCard;
