import { useReducer } from "react";
import type { JobQuery } from "../src/utils/types";
import type { Action } from "../src/utils/types";

const reducer = (jobQuery: JobQuery, action: Action) => {
  switch (action.type) {
    case "ADD_QUERY": {
      return action.payLoad;
    }
    default:
      return jobQuery;
  }
};

export const useJobReducer = () => {
  const [query, dispatch] = useReducer(reducer, {
    search: "",
    location: "",
    schedule: "",
  });

  const addQuery = (query: JobQuery) => {
    dispatch({ type: "ADD_QUERY", payLoad: query });
  };

  const value = {
    query: query,
    addQuery: addQuery,
  };

  return value;
};
