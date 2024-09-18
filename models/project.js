import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

export default mongoose.models.Project ||
  mongoose.model('Project', projectSchema)

//add user id to project schema
