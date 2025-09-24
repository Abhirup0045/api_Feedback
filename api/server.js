import express from 'express'
import connectDB from '../db.js'
import Feedback from '../models/schema.js'
const app = express()
app.use(express.json())

app.post('/api/users', async (req, res) => {
  await connectDB()
  const data = await Feedback.create(req.body)
  res.status(200).json(data)
})

app.get('/api/users', async (req, res) => {
  await connectDB()
  const data = await Feedback.find({})
  res.status(200).json(data)
})

app.get('/api/users/:id', async (req, res) => {
  await connectDB()
  const data = await Feedback.findById(req.params.id)
  if (data === null) {
    res.status(404).json({ message: 'user Not Found!' })
  } else {
    res.status(200).json(data)
  }
})

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is Live Developer' })
})

app.delete('/api/users/:id', async (req, res) => {
  await connectDB()
  const delCount = await Feedback.deleteOne({ _id: req.params.id })
  res
    .status(200)
    .json({ message: 'User Deleted', deletedItem: delCount.delCount })
})

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => console.log(`🚀 Local server running on port ${PORT}`))
}

export default app
