import express from 'express'
import connectDB from './db.js'
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is Live Developer' })
})

app.get('/api/users', async (req, res) => {
  try {
    await connectDB() // ensure DB is connected
    // Example: send dummy data
    res.json([{ name: 'Alice', age: 25 }])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err.message })
  }
})

export default app
