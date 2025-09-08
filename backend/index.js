import express from 'express'
import homeRoute from './src/routes/home.js'
import cors from 'cors'
import detailRoute from './src/routes/detail.js'
// const PORT = process.env.PORT || 3000
const PORT = 3000

const app = express()

// Allow frontend origin
app.use(cors({
    origin: 'http://localhost:5173',
}))

app.use('/api/v1', homeRoute)
app.use('/api/v1', detailRoute)


app.listen(PORT, () => {
    console.log(`Server runnig on port http://localhost:${PORT}`);
})