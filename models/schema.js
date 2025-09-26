import mongoose from 'mongoose'

const feedbackSchema = mongoose.Schema({
  name: { type: String },
  feedback: { type: String, required: true },
  rating: { type: Number },
  upvote: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
})

const Feedback = mongoose.model('feedback', feedbackSchema)

export default Feedback
