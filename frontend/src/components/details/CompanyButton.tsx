import { twMerge } from "tailwind-merge";

type CompanyButtonProp = {
  className?: string;
  companyName?: string;
};
const CompanyButton = ({ className, companyName }: CompanyButtonProp) => {
  return (
    <a href={`https://www.google.com/search?q=${companyName}`} target="_blank" rel="noreferrer">
      <button
        className={twMerge(
          "bg-primary/15 hover:bg-primary-violet/30 cursor-pointer rounded px-6 py-2",
          className,
        )}
      >
        <p className="font-kumbh text-primary font-semibold capitalize">
          company site
        </p>
      </button>
    </a>
  );
};

export default CompanyButton;
