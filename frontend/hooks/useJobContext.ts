import { use } from "react";
import { JobContext } from "../src/store/JobContext";

export const useJobContext = () => {
  const context = use(JobContext);
  if (!context) {
    throw new Error(
      "⛔ useJobContext must be used within useJobContextProvider"
    );
  }
  return context;
};
