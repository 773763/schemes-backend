const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const DB_CONNECTION_STRING = "mongodb+srv://prajapatvishnu7737:vishnu7737635950@clxkotcxn8ccluster0.oyho2vj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB_CONNECTION_STRING)
  .then(() => console.log('Successfully connected to MongoDB!'))
  .catch(err => console.error('Connection error', err));

const schemeSchema = new mongoose.Schema({ /* ...schema... */ }, { timestamps: true });
const Scheme = mongoose.model('Scheme', schemeSchema);

app.get('/api/schemes', async (req, res) => {
  const schemes = await Scheme.find({});
  res.json(schemes);
});

app.get('/api/schemes/latest', async (req, res) => {
  const latestSchemes = await Scheme.find().sort({ createdAt: -1 }).limit(5);
  res.json(latestSchemes);
});

const { schemesData } = require('./schemes.js');
app.post('/api/seed-database', async (req, res) => {
    try {
        await Scheme.deleteMany({});
        await Scheme.insertMany(schemesData);
        res.status(201).json({ message: 'Database seeded successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error seeding database' });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running successfully on http://localhost:${PORT}`);
});