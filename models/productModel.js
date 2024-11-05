const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  decription: String,
  ratings: String,
  images: [
    {
      image: String,
    },
  ],
  category: String,
  seller: String,
  stocke: String,
  numOfReviews: String,
  createdAt: Date,
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
