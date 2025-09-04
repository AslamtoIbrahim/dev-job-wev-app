import type { JobDetail } from "../../utils/types";
import ApplyButton from "./ApplyButton";

const Description = ({job} : {job : JobDetail}) => {
  return (
    <div className="dark:bg-dark-card shadow-dark-gray font-kumbh relative space-y-6 rounded bg-white p-6 shadow-2xl/10 md:px-10 dark:shadow-xs">
      <section className="space-y-6 md:space-y-6">
        <div className="flex flex-col gap-y-4 md:justify-between md:items-center md:flex-row">
          <div className="space-y-1">
            <div className="text-gray dark:text-dark-gray flex items-center gap-x-2">
              <p>{job.metadata.postedAt}</p>
              <div className="bg-gray dark:bg-dark-gray size-1 rounded-full" />
              <p className="capitalize">{job.metadata.scheduleType}</p>
            </div>
            <p className="text-title dark:text-dark-title font-bold md:text-lg capitalize">
              {job.title.toLowerCase()}
            </p>
            <p className="text-primary text-sm md:text-base font-semibold">{job.location}</p>
          </div>
          <ApplyButton/>
        </div>
        <p className="text-gray dark:text-dark-gray">{job.description}</p>
      </section>
      <section className="space-y-2">
        <p className="text-title dark:text-dark-title font-semibold">
          {job.jobHighlights[0].items && job.jobHighlights[0].title}
        </p>
        <ul className="text-gray dark:text-dark-gray mx-5 list-disc">
          {job.jobHighlights[0].items?.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </section>
      <section className="space-y-2">
        <p className="text-title dark:text-dark-title font-semibold">
          {job.jobHighlights[1].items && job.jobHighlights[1].title}
        </p>
        <ul className="text-gray dark:text-dark-gray mx-5 list-disc">
          {job.jobHighlights[1].items?.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </section>
      <section className="space-y-2">
        <p className="text-title dark:text-dark-title font-semibold">
          {job.jobHighlights[2].items && job.jobHighlights[2].title}
        </p>
        <ul className="text-gray dark:text-dark-gray mx-5 list-decimal">
          {job.jobHighlights[2].items?.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Description;
