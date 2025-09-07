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

export type JobQuery = {
  search: string;
  location: string;
  schedule: string;
};

export type QueryContext = {
  query: JobQuery;
  addQuery: (query: JobQuery) => void;
};

export type Action = {
  type: "ADD_QUERY";
  payLoad: JobQuery;
};

export type AxiosJob = {
  hasNextPage: boolean;
  jobs: Job[];
};
export type AxiosJobDetails = {
  jobDetails: JobDetail
};
