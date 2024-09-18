import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  firstLocation: {
    type: String,
    required: true,
  },
  secondLocation: {
    type: String,
    required: false,
  },
  thirdLocation: {
    type: String,
    required: false,
  },
});

export default mongoose.models.Location ||
  mongoose.model("Location", locationSchema);
