const JobCard = () => {
  return (
    <div className="dark:bg-dark-card shadow-dark-gray relative h-50 space-y-6 rounded bg-white p-6 shadow-2xl/10 dark:shadow-xs ">
      <div className="absolute -top-4 flex size-10 items-center justify-center rounded-xl bg-amber-400">
        <img src="/public/vite.svg" alt="" />
      </div>
      <div className="font-kumbh mt-4 space-y-2">
        <div className="text-gray dark:text-dark-gray flex items-center gap-x-2">
          <p>20h ago</p>
          <div className="bg-gray dark:bg-dark-gray size-1 rounded-full" />
          <p className="capitalize">part time</p>
        </div>
        <p className="text-title dark:text-dark-title font-semibold">
          Haskell and PureScript Dev
        </p>
        <p className="text-gray dark:text-dark-gray  capitalize">national wildlife</p>
      </div>
      <div>
        <p className="text-primary font-kumbh text-xs font-semibold">
          Columbus, OH
        </p>
      </div>
    </div>
  );
};

export default JobCard;
