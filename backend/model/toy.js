const mongoose = require("mongoose");

const ToySchema = new mongoose.Schema(
  {
    toyName: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Toy", ToySchema);