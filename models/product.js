import mongoose from 'mongoose'
import { optional } from 'zod'

const productSchema = new mongoose.Schema({
  generalInformation: {
    productName: {
      type: String,
      required: false,
    },
    productCategory1: {
      type: String,
      required: false,
    },
    productCategory2: {
      type: String,
      required: false,
    },
    productCategory3: {
      type: String,
      required: false,
    },
    productDescription: {
      type: String,
      required: false,
    },
  },

  location: {
    premises: {
      type: String,
      required: false,
    },
    room: {
      type: String,
      required: false,
    },
    place: {
      type: String,
      required: false,
    },
    accessibility: {
      type: String,
      enum: [
        'Lätt Åtkomlig',
        'Åtkomlig men planering och specialverktyg kan krävas',
        'Begränsad åtkomlighet',
      ],
      required: false,
    },
    dismantling: {
      type: String,
      enum: [
        'Enkel att demontera/demontering krävs ej',
        'Demonterbar men specialverktyg kan krävas',
        'Begränsad demonterbarhet',
      ],
      required: false,
    },
  },

  condition: {
    aestheticCondition: {
      type: Number,
      min: 1,
      max: 5,
      required: false,
    },
    functionalCondition: {
      type: String,
      required: false,
    },
  },

  properties: {
    material: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
    surfaceTreatment: {
      type: String,
      required: false,
    },
  },

  dimensions: {
    measurementUnit: {
      type: String,
      enum: ['mm', 'cm', 'm', 'in', 'ft'],
      required: false,
    },
    width: {
      type: Number,
      required: false,
    },
    height: {
      type: Number,
      required: false,
    },
    depth: {
      type: Number,
      required: false,
    },
    weightUnit: {
      type: String,
      enum: ['kg', 'g', 'lbs'],
      required: false,
    },
    weightPerUnit: {
      type: Number,
      required: false,
    },
  },

  specialProperties: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
    required: false,
  },

  productInformation: {
    manufacturer: {
      type: String,
      required: false,
    },
    articleNumber: {
      type: String,
      required: false,
    },
    manufacturingYear: {
      type: Number,
      required: false,
    },
    purchaseYear: {
      type: Number,
      required: false,
    },
    GTIN: {
      type: String,
      required: false,
    },
    RSK: {
      type: String,
      required: false,
    },
    ENR: {
      type: String,
      required: false,
    },
    BSAB: {
      type: String,
      required: false,
    },
    BK04: {
      type: String,
      required: false,
    },
  },

  price: {
    internalPrice: {
      type: Number,
      required: false,
    },
    externalPrice: {
      type: Number,
      required: false,
    },
    buyerPrice: {
      type: Boolean,
      required: false,
    },
  },

  address: {
    address: {
      type: String,
      required: false,
    },
    postalCode: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
  },

  pickup: {
    availableDate: {
      type: Date,
      required: false,
    },
    firstDeliveryDate: {
      type: Date,
      required: false,
    },
    canBeSent: {
      type: Boolean,
      required: false,
    },
    canBePickedUp: {
      type: Boolean,
      required: false,
    },
    contactPerson: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },

  variations: {
    type: Array,
    of: mongoose.Schema.Types.Mixed,
    required: false,
  },

  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
})

export default mongoose.models.Product ||
  mongoose.model('Product', productSchema)
