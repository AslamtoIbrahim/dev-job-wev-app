import type { ApplyLink } from "../../utils/types";

const ApplyLinks = ({ applyLink }: { applyLink: ApplyLink[] }) => {
  return (
    <div className="bg-primary/10 dark:bg-dark-primary/10 text-gray dark:text-dark-gray flex flex-col gap-4 rounded-lg py-4 px-2 md:p-6 shadow ">
        <h2 className="font-bold mx-3">Apply Links</h2>
      <ol className="list-disc list-inside mx-5">
        {
          applyLink.map((link) => (
            <li key={link.title} className="mb-2">
              <a
                className="text-primary font-semibold hover:underline"
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.title}
              </a>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default ApplyLinks;
