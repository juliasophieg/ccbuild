import mongoose from 'mongoose'

const productLogisticSchema = new mongoose.Schema({
  pickup: {
    availableDate: {
      type: Date,
      required: false,
    },
    firstDeliveryDate: {
      type: Date,
      required: false,
    },
  },
  location: {
    house: {
      type: String,
      required: false,
    },
    room: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    accesaibility: {
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
  decision: {
    location1: {
      type: String,
      required: false,
    },
    location2: {
      type: String,
      required: false,
    },
    location3: {
      type: String,
      required: false,
    },
    location4: {
      type: String,
      required: false,
    },
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  status: {
    type: String,
    enum: [
      'Inventerad',
      'Inventerad - i byggnad',
      'Inventerad - i lager/förråd',
      'Mängdad',
      'Mängdad - i byggnad',
      'Mängdad - i lager/förråd',
      'På rekonditionering',
      'I lager',
      'Bevarad (slutstatus)',
      'Återbrukad i projektet (slutstatus)',
      'Återbrukad inom organisationen (slutstatus)',
      'Återbrukad externt av annan aktör (slutstatus)',
      'Avfallshanterad (slutstatus)',
    ],
    required: false,
  },
  marketplaces: {
    type: String,
    enum: [
      'Ej publicerad',
      'Publicerad som intern annons',
      'Publicerad som extern annons',
      'Reserverad',
      'Såld',
      'Avpublicerad',
      'Automatiskt avpublicerad',
    ],
    required: false,
    default: 'Ej publicerad',
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products',
    required: false,
  },
})

export default mongoose.models.ProductLogistic ||
  mongoose.model('ProductLogistic', productLogisticSchema)
