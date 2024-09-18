import mongoose from "mongoose";

const productLogisticSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "locations",
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
});

export default mongoose.models.ProductLogistic ||
  mongoose.model("ProductLogistic", productLogisticSchema);
