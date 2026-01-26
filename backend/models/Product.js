const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Jute Products", "Textiles & Fabrics", "Industrial Equipment"],
    },
    image: {
      type: String, // store filename or full URL
      required: false,
    },
    description: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
