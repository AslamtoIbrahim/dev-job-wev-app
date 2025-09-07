import { createContext } from "react";
import type { QueryContext } from "../utils/types";

export const JobContext = createContext<QueryContext | undefined>(undefined);
