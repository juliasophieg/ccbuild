import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  category: {
    mainCategory: {
      type: String,
      required: false,
    },
    subCategory: {
      type: String,
      required: false,
    },
    subSubCategory: {
      type: String,
      required: false,
    },
  },
  condition: {
    type: Number,
    min: 1,
    max: 5,
    required: false,
  },
  format: {
    length: {
      type: Number,
      required: false,
    },
    height: {
      type: Number,
      required: false,
    },
    width: {
      type: Number,
      required: false,
    },
  },
  productInfo: {
    manufacturer: {
      type: String,
      required: false,
    },
    yearOfManufacturing: {
      type: Number,
      required: false,
    },
    articleNumber: {
      type: Number,
      required: false,
    },
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
})

export default mongoose.models.Product ||
  mongoose.model('Product', productSchema)
