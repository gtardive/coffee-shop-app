const mongoose = require('mongoose');

const coffeeShopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  imageUrl: { type: String, required: true },
});

const CoffeeShop = mongoose.model('CoffeeShop', coffeeShopSchema);

module.exports = CoffeeShop;
