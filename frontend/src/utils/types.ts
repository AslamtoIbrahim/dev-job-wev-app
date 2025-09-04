export type Job = {
  logo: string | null;
  metadata: {
    postedAt: string | null;
    scheduleType: string;
  };
  title: string;
  companyName: string;
  location: string;
};

export type JobDetail = {
  title: string;
  companyName: string;
  location: string;
  description: string;
  jobHighlights: JobHighlight[];
  metadata: {
    postedAt: string | null;
    scheduleType: string;
  };
  logo: string | null;
  applyLink: ApplyLink[];
};

type JobHighlight = {
  title: string;
  items: string[] | null;
};

export type ApplyLink = {
  title: string;
  link: string;
};
