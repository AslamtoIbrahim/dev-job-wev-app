import { useInfiniteQuery } from "@tanstack/react-query";
import { getJobs } from "../src/api/services";
import { useJobContext } from "./useJobContext";

const useFetchJobs = () => {
  const context = useJobContext();
  const { search, location, schedule } = context.query;

  return useInfiniteQuery({
    queryKey: ["jobs", search, location, schedule] as [
      string,
      string,
      string,
      string,
    ],
    queryFn: getJobs,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};

export default useFetchJobs;
