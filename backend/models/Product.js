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

productSchema.index({ category: 1, createdAt: -1 });

module.exports = mongoose.model("Product", productSchema);
