// db.js
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export default async function connectDb() {
  try {
    await mongoose.connect(process.env.DB_URI)
    console.log('connected')
  } catch (error) {
    console.log('failed to connect to MongoDB')
  }
}
