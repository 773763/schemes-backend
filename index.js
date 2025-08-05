const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// IMPORTANT: Make sure this has your correct password
const DB_CONNECTION_STRING = "mongodb+srv://prajapatvishnu7737:vishnu7737635950@clxkotcxn8ccluster0.oyho2vj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(DB_CONNECTION_STRING)
  .then(() => console.log('Successfully connected to MongoDB!'))
  .catch(err => {
    console.error('Connection error', err);
    process.exit(1);
  });

// Schema and Model Definition
const schemeSchema = new mongoose.Schema({
  id: String,
  title: String,
  category: String,
  state: String,
  minAge: Number,
  caste: String,
  maxIncome: Number,
  disability: String,
  official_link: String,
  description: String,
});
const Scheme = mongoose.model('Scheme', schemeSchema);

// API Route to get all schemes from the database
app.get('/api/schemes', async (req, res) => {
  try {
    const schemes = await Scheme.find({});
    res.json(schemes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching schemes', error });
  }
});

// Route to manually add/update data in the database from schemes.js
const { schemesData } = require('./schemes.js');
app.post('/api/seed-database', async (req, res) => {
  try {
    await Scheme.deleteMany({}); // Deletes old data
    await Scheme.insertMany(schemesData); // Inserts new data
    res.status(201).json({ message: 'Database seeded successfully with new manual data!' });
  } catch (error) {
    res.status(500).json({ message: 'Error seeding database', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running successfully on http://localhost:${PORT}`);
});