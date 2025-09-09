import { getJobDatatbase } from "../utils/databes.js";


export const getJobList = (req, res) => {
  try {

    let jobs = getJobDatatbase()
    const { search, location, scheduleType, page, limit } = req.query
    console.log('search:', search);
    console.log('location:', location);
    console.log('scheduleType:', scheduleType);
    console.log('page:', page);
    console.log('limit:', limit);

    jobs = findJobsBySearchParams(jobs, search, location, scheduleType);

    console.log('🎃 length', jobs.length)

    const hasNextPage = limit * page < jobs.length
    jobs = getPaginatedJobs(jobs, limit, page)


    res.status(200).json({ hasNextPage: hasNextPage, jobs: jobs });
  } catch (error) {
    res.status(500).json({ message: "Error reading data" });
  }
};

const findJobsBySearchParams = (jobs, search, location, scheduleType) => {
  if (!search && !location && !scheduleType) return jobs;
  
  const fields = ['title', 'companyName']

  const formatedSearch = search.toLowerCase();
  const formatedLocation = location.toLowerCase();
  const formatedScheduleType = scheduleType.toLowerCase();
  return jobs.filter((j) => fields.some(f => j[f].toLowerCase().includes(formatedSearch))
    && j.location.toLowerCase().includes(formatedLocation)
    && j.metadata.scheduleType.toLowerCase().includes(formatedScheduleType));
};


const getPaginatedJobs = (jobs, limit, page) => {
  if (limit && page) {
    const start = (page - 1) * limit
    const end = page * limit
    return jobs.slice(start, end)
  }
  return jobs
};


// here is the API linke 🌐
// http://localhost:2000/api/v1/jobs?search=&location=&scheduleType=
// http://localhost:2000/api/v1/jobs?search=&location=&scheduleType=&page=1&limit=6