import express from 'express'
import { getJobDetails } from '../controllers/detailController.js'


const detailRoute = express.Router()

detailRoute.get('/jobs/job', getJobDetails)

export default detailRoute