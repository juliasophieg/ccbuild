import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    mainCategory: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    subSubCategory: {
      type: String,
      required: true,
    },
  },
  condition: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  format: {
    length: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
  },
  productInfo: {
    manufacturer: {
      type: String,
      required: true,
    },
    yearOfManufacturing: {
      type: Number,
      required: true,
    },
    articleNumber: {
      type: Number,
      required: true,
    },
  },
  project: {
    type: mongoose.Schema.Types.ObjectId, // This should reference the Project model
    ref: 'Project',
    required: true,
  },
})

export default mongoose.models.Product ||
  mongoose.model('Product', productSchema)
