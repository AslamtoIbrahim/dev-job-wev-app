import express from 'express'
import homeRoute from './routes/home.js'
const PORT = process.env.PORT || 2000

const app = express()

app.use('/api/v1', homeRoute)


app.listen(PORT, () => {
    console.log(`Server runnig on port http://localhost:${PORT}`);
})