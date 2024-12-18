const express = require('express');
const CoffeeShop = require('../models/coffeeShop');
const router = express.Router();

// Get all coffee shops
router.get('/', async (req, res) => {
  try {
    const coffeeShops = await CoffeeShop.findAll();
    res.json(coffeeShops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new coffee shop
router.post('/', async (req, res) => {
  const { name, description, rating, imageUrl } = req.body;

  try {
    const newCoffeeShop = await CoffeeShop.create({
      name,
      description,
      rating,
      imageUrl,
    });
    res.status(201).json(newCoffeeShop);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
