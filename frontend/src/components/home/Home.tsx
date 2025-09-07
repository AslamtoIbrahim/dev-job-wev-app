import useFetchJobs from "../../../hooks/useFetchJobs";
import Filter from "../filter/Filter";
import Header from "../head/Header";
import LoaderSpin from "../LoaderSpin";
import JobCard from "./JobCard";
import LoadButton from "./LoadButton";

const Home = () => {
  const { data, status, error, isFetching, fetchNextPage, hasNextPage } =
    useFetchJobs();
  if (status === "error") {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="font-semibold text-red-500">{error.message}</p>
      </div>
    );
  }

  console.log("hasNextPage: ", hasNextPage);

  return (
    <div>
      <div className="back" />
      <Header />
      <Filter />
      {status === "pending" && (
        <div className="col-span-3 flex h-screen items-center justify-center">
          <LoaderSpin />
        </div>
      )}
      {data && (
        <section>
          <div className="padx mt-12 space-y-12 md:my-0 md:mt-14 md:grid md:grid-cols-2 md:gap-x-2 lg:grid-cols-3 lg:gap-x-4 xl:grid-cols-4">
            {data?.pages.map((p) =>
              p.jobs.map((j) => <JobCard key={j.title} job={j} />),
            )}
          </div>
          <div className={`flex w-full justify-center py-8`}>
            {isFetching && <LoaderSpin />}
            <LoadButton
              className={`${hasNextPage && !isFetching ? "flex" : "hidden"}`}
              disabled={isFetching}
              onClick={() => fetchNextPage()}
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
