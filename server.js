import express from 'express'
import connctDB from './db.js'
const app = express()
app.use(express.json())

await connctDB()

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is Live Developer' })
})

export default app
