import express from 'express'
import homeRoute from './routes/home.js'
import cors from 'cors'
const PORT = process.env.PORT || 2000

const app = express()

// Allow frontend origin
app.use(cors({
    origin: 'http://localhost:5173',
}))

app.use('/api/v1', homeRoute)


app.listen(PORT, () => {
    console.log(`Server runnig on port http://localhost:${PORT}`);
})