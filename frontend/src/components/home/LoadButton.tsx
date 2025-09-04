import { twMerge } from "tailwind-merge";

type LoadButtonProp = {
  className?: string;
};
const LoadButton = ({ className }: LoadButtonProp) => {
  return (
    <button
      className={twMerge(
        "bg-primary hover:bg-primary-violet font-kumbh cursor-pointer rounded px-6 py-2 text-gray-50 capitalize",
        className,
      )}
    >
      load more
    </button>
  );
};

export default LoadButton;
