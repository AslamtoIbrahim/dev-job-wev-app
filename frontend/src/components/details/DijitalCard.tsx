import CompanyButton from "./CompanyButton";

const DijitalCard = () => {
  return (
    <div className="dark:bg-dark-card shadow-dark-gray relative flex flex-col items-center gap-y-6 rounded bg-white py-8 shadow-2xl/10 md:flex-row md:gap-x-8 md:py-0 md:pr-10 dark:shadow-xs">
      <div className="absolute -top-6 flex size-12 items-center justify-center rounded-xl bg-amber-400 md:static md:size-30 md:rounded-none md:rounded-bl md:rounded-tl">
        <img src="/public/vite.svg" alt="company logo" />
      </div>
      <div className="font-kumbh md: mt-4 text-center md:mt-0 md:flex-3 md:text-start">
        <p className="text-title dark:text-dark-title text-lg/6 font-semibold capitalize">
          Company name
        </p>
        <p className="text-gray dark:text-dark-gray">copany.com</p>
      </div>
      <CompanyButton />
    </div>
  );
};

export default DijitalCard;
