import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Home from "./components/home/Home";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import JobContextProvider from "./store/JobContextProvider";

function App() {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <JobContextProvider>
          <Home />
        </JobContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
