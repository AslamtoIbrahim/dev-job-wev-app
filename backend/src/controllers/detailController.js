import { getJobDatatbase } from "../utils/databes.js";


export const getJobDetails = (req, res) => {
    try {
        const {title} = req.query
        console.log('💎 title:', title);
        const jobDetails = getJobByTitle(title)
        res.status(200).json({jobDetails})
    } catch (error) {
        res.status(500).json({message: 'Error get job object by title'})
    }
};


const getJobByTitle = (title) => {
  const jobs = getJobDatatbase()
  return jobs.find(j => j.title.toLowerCase().includes(title.toLowerCase()))
};