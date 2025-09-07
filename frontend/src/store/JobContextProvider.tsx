import type { ReactNode } from "react";
import { JobContext } from "../store/JobContext";
import { useJobReducer } from "../../hooks/useJobReducer";

const JobContextProvider = ({ children }: { children: ReactNode }) => {
  const value = useJobReducer()
  return <JobContext value={value}>
    {children}
  </JobContext>;
};

export default JobContextProvider;
