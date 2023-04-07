const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: Array,
  },
  size: {
    type: String,
  },
  colour: {
    type: String,
  },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
