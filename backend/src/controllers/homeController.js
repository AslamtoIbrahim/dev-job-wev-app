import fs from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "data.json");

export const getJobList = (req, res) => {
  try {
    const fileData = fs.readFileSync(dataPath, "utf-8");
    let jobs = JSON.parse(fileData);
    const { search, location, scheduleType,page, limit} = req.query
    console.log('search:', search);
    console.log('location:', location);
    console.log('scheduleType:', scheduleType);
    console.log('page:', page);
    console.log('limit:', limit);

    jobs = findJobsBySearchParams(jobs, search, location, scheduleType);

    jobs = getPaginatedJobs(jobs, limit, page)
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error reading data" });
  }
};

const findJobsBySearchParams = (jobs, search, location, scheduleType) => {
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
    const end = page * limit
    return jobs.slice(0, end)
  }
  return jobs
};


// here is the API linke 🌐
// http://localhost:2000/api/v1/jobs?search=&location=&scheduleType=
// http://localhost:2000/api/v1/jobs?search=&location=&scheduleType=&page=1&limit=12