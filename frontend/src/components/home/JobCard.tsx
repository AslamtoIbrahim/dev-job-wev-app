import type { Job } from "../../utils/types";

const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="dark:bg-dark-card shadow-dark-gray relative h-50 space-y-6 rounded bg-white p-6 shadow-2xl/10 dark:shadow-xs">
      <div className="bg-primary absolute -top-6 flex size-12 items-center justify-center rounded-xl">
        <img
          className="rounded-xl"
          src={job.logo ? job.logo : "/public/vite.svg"}
          alt={job.title}
          onError={(e) => (e.currentTarget.src = "/public/vite.svg")}
        />
      </div>
      <div className="font-kumbh mt-4 space-y-2">
        <div className="text-gray dark:text-dark-gray flex items-center gap-x-2">
          <p>{job.metadata.postedAt}</p>
          <div className="bg-gray dark:bg-dark-gray size-1 rounded-full" />
          <p className="capitalize">{job.metadata.scheduleType}</p>
        </div>
        <p className="text-title dark:text-dark-title truncate font-black capitalize">
          {job.title.toLowerCase()}
        </p>
        <p className="text-gray dark:text-dark-gray truncate capitalize">
          {job.companyName}
        </p>
      </div>
      <div>
        <p className="text-primary font-kumbh text-sm font-semibold">
          {job.location}
        </p>
      </div>
    </div>
  );
};

export default JobCard;
