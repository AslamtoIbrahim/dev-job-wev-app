import { description, items } from "../../../../backend/data";
import ApplyButton from "./ApplyButton";

const Description = () => {
  return (
    <div className="dark:bg-dark-card shadow-dark-gray font-kumbh relative space-y-6 rounded bg-white p-6 shadow-2xl/10 md:px-10 dark:shadow-xs">
      <section className="space-y-6 md:space-y-6">
        <div className="flex flex-col gap-y-4 md:justify-between md:items-center md:flex-row">
          <div className="space-y-1">
            <div className="text-gray dark:text-dark-gray flex items-center gap-x-2">
              <p>20h ago</p>
              <div className="bg-gray dark:bg-dark-gray size-1 rounded-full" />
              <p className="capitalize">part time</p>
            </div>
            <p className="text-title dark:text-dark-title font-bold md:text-lg">
              Haskell and PureScript Dev
            </p>
            <p className="text-primary text-xs font-semibold">Columbus, OH</p>
          </div>
          <ApplyButton/>
        </div>
        <p className="text-gray dark:text-dark-gray">{description}</p>
      </section>
      <section className="space-y-2">
        <p className="text-title dark:text-dark-title font-semibold">
          Qualifications
        </p>
        <ul className="text-gray dark:text-dark-gray mx-5 list-disc">
          {items.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </section>
      <section className="space-y-2">
        <p className="text-title dark:text-dark-title font-semibold">
          Benefits
        </p>
        <ul className="text-gray dark:text-dark-gray mx-5 list-disc">
          {items.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </section>
      <section className="space-y-2">
        <p className="text-title dark:text-dark-title font-semibold">
          Responsibilities
        </p>
        <ul className="text-gray dark:text-dark-gray mx-5 list-decimal">
          {items.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Description;
