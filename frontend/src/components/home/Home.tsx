import Filter from "../filter/Filter"
import Header from "../head/Header"
import JobCard from "./JobCard"

const Home = () => {
  return (
    <div>
      <div className="back"></div>
      <Header />
      <Filter />
      <div className="padx mt-10">
        <JobCard />
      </div>
    </div>
  )
}

export default Home
