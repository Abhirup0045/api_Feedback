import express from 'express'
import connectDB from './db.js'
import Feedback from './models/schema.js'
const app = express()
app.use(express.json())

await connectDB()

app.get('/users', async (req, res) => {
  const data = await Feedback.find({})
  res.status(201).json(data)
})

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is Live Developer' })
})

export default app
