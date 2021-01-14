import mongoose from 'mongoose'

const shoeProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    displayImages: [
      {
        type: String,
        required:true
      },
    ],
    shoeSize: [
      {
        type: Number,
        required: true,
      },
    ],
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
)

export const ShoeProductModel = mongoose.model('shoe', shoeProductSchema)
