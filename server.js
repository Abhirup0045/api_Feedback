import express from 'express'
import connctDB from './db.js'
const app = express()
app.use(express.json())

await connctDB()

export default app
