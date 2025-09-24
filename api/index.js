import express from 'express'
import connectDB from '../db.js'
import Feedback from '../models/schema.js'
const app = express()
app.use(express.json())

app.post('/users', async (req, res) => {
  await connectDB()
  const data = await Feedback.create(req.body)
  res.status(200).json(data)
})

app.get('/users', async (req, res) => {
  await connectDB()
  const data = await Feedback.find({})
  res.status(200).json(data)
})

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is Live Developer' })
})

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => console.log(`🚀 Local server running on port ${PORT}`))
}

export default app
