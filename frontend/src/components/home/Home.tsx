import Filter from "../filter/Filter"
import Header from "../head/Header"
import JobCard from "./JobCard"

const Home = () => {
  return (
    <div>
      <div className="back"/> 
      <Header />
      <Filter />
      <div className="padx my-10 md:my-14 space-y-10 md:grid md:grid-cols-2 md:gap-x-2">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  )
}

export default Home
