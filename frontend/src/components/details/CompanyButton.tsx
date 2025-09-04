import { twMerge } from "tailwind-merge";

type CompanyButtonProp = {
  className?: string;
};
const CompanyButton = ({ className }: CompanyButtonProp) => {
  return (
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
  );
};

export default CompanyButton;
