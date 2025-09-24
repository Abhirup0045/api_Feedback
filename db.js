// db.js
import mongoose from 'mongoose'

let cached = global.mongoose // reuse connection across invocations

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const uri = process.env.MONGODB_URI
    if (!uri) throw new Error('MONGODB_URI not defined in environment')

    cached.promise = mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((mongoose) => {
        return mongoose
      })
  }

  cached.conn = await cached.promise
  return cached.conn
}
