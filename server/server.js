const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const formRoutes = require('./routes/formRoutes');

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/forms', formRoutes);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});