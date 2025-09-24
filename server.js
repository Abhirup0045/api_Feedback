import express from 'express'
import connctDB from './db.js'
const app = express()
app.use(express.json())

connectDB()
  .then(() => {
    console.log('✅ DB connected in Vercel too')
  })
  .catch((err) => {
    console.error('❌ DB connection error:', err)
  })

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is Live Developer' })
})

export default app
