import { twMerge } from "tailwind-merge";

type ApplyButtonProp = {
  className?: string;
  link?: string;
};

const ApplyButton = ({ className, link }: ApplyButtonProp) => {
  return (

    <a href={link} target="_blank" rel="noreferrer">
      <button
        className={twMerge(
          "bg-primary hover:bg-primary-violet font-kumbh cursor-pointer rounded px-6 py-2 text-gray-50 capitalize",
          className,
        )}
      >
        apply now
      </button>
    </a>
  );
};

export default ApplyButton;
