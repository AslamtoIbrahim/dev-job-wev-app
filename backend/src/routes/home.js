import express from 'express'
import { getJobList } from '../controllers/homeController.js'

const homeRoute = express.Router()

homeRoute.get('/jobs', getJobList)


export default homeRoute