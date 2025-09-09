import type { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";
import type { AxiosJob, AxiosJobDetails, Job, JobDetail } from "../utils/types";

// const url = "http://localhost:2000/api/v1/jobs";
// const detailUrl = "http://localhost:2000/api/v1/jobs/job";
const url = "https://dev-job-wev-app-production-ece9.up.railway.app//api/v1/jobs";
const detailUrl = "https://dev-job-wev-app-production-ece9.up.railway.app//api/v1/jobs/job";

const LIMIT_ITEMS = 8;

export const getJobs = async ({
  queryKey,
  pageParam,
}: QueryFunctionContext<[string, string, string, string], number>): Promise<{
  jobs: Job[];
  nextPage: number | undefined;
}> => {
  const [, search, location, schedule] = queryKey;
  const res = await axios.get<AxiosJob>(url, {
    params: {
      search,
      location: location,
      scheduleType: schedule,
      page: pageParam,
      limit: LIMIT_ITEMS,
    },
  });
  const nextPage = res.data.hasNextPage ? pageParam + 1 : undefined;
  const jobs: Job[] = res.data.jobs;

  return { nextPage, jobs };
};

export const getJobByTitle = async ({
  queryKey,
}: {
  queryKey: [string, title?: string];
}): Promise<JobDetail> => {
  const [, title] = queryKey;
  if (!title) {
    throw new Error(`This title ${title} is not found`);
  }

  const res = await axios.get<AxiosJobDetails>(detailUrl, {
    params: { title: decodeURIComponent(title) },
  });
  
  return res.data.jobDetails;
};
