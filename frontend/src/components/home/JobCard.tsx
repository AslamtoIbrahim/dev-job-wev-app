const JobCard = () => {
  return (
    <div className="bg-white dark:bg-dark-card p-6 h-50 relative space-y-6 shadow-2xl/10 rounded shadow-dark-gray dark:shadow-xs">
      <div className="bg-amber-400  rounded-xl size-10 flex justify-center items-center absolute -top-4">
        <img src="/public/vite.svg" alt="" />
      </div>
      <div className="font-kumbh space-y-2 mt-4">
        <div className="text-dark-gray  flex items-center gap-x-2">
          <p>20h ago</p>
          <div className="size-1 bg-dark-gray rounded-full" />
          <p className="capitalize">part time</p>
        </div>
        <p className="font-semibold text-title dark:text-dark-title">Haskell and PureScript Dev</p>
        <p className="capitalize text-dark-gray">national wildlife</p>
      </div>
      <div>
        <p className="text-primary font-semibold text-xs font-kumbh">
          Columbus, OH
        </p>
      </div>
    </div>
  );
};

export default JobCard;
