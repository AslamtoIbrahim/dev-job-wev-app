import type { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";
import type { AxiosJob, Job } from "../utils/types";

const url = "http://localhost:2000/api/v1/jobs";

const LIMIT_ITEMS = 6;

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
