import { twMerge } from "tailwind-merge";

type ApplyButtonProp = {
  className?: string;
};

const ApplyButton = ({ className }: ApplyButtonProp) => {
  return (
    <button
      className={twMerge(
        "bg-primary hover:bg-primary-violet font-kumbh cursor-pointer rounded px-6 py-2 text-gray-50 capitalize",
        className,
      )}
    >
      apply now
    </button>
  );
};

export default ApplyButton;
