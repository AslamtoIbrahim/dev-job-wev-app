import { twMerge } from "tailwind-merge";

type LoadButtonProp = {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};
const LoadButton = ({ className, disabled, onClick }: LoadButtonProp) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
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
