import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export default async function connctDB() {
  try {
    await mongoose.connect(process.env.DB_URI)
    console.log('connected')
  } catch (err) {
    console.err('failed to connect!')
  }
}
