// db.js
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

let isConnected = false

export default async function connectDB() {
  if (isConnected) return
  try {
    await mongoose.connect(process.env.DB_URI)
    isConnected = true
    console.log('connected')
  } catch (err) {
    console.error('failed to connect to MongoDB', err)
  }
}
