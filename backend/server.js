const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.log('MongoDB connection error:', err);
});

// Routes
const coffeeShopRoutes = require('./routes/coffeeShops');
app.use('/api/coffeeShops', coffeeShopRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
