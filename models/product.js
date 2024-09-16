import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  enabled: {
    type: String,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
