import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Home from "./components/home/Home";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import JobContextProvider from "./store/JobContextProvider";
import { Route, Routes } from "react-router-dom";
import Details from "./components/details/Details";
import NotFound from "./components/NotFound";

function App() {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <JobContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs/job/:name" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </JobContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
