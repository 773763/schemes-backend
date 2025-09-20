require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cron = require('node-cron');

const Scheme = require('./schemes.js'); 
const { scrapeAndSaveSchemes, scrapeSJEWebsite } = require('./scraper.js');
const { schemesData } = require('./seedData.js');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
mongoose.connect(DB_CONNECTION_STRING)
  .then(() => console.log('Successfully connected to MongoDB!'))
  .catch(err => console.error('Connection error', err));

// === YEH HAI AAPKA FINAL, 100% WORKING FILTER ===
app.get('/api/schemes', async (req, res) => {
    try {
        const { category, state, age, income, caste, disability } = req.query;
        
        // Hum saare filters ko ek '$and' array mein daalenge
        let andConditions = []; 

        // 1. Category Filter
        if (category) {
            andConditions.push({ category: category });
        }

        // 2. State Filter
        if (state) {
            andConditions.push({ applicable_states: { $in: [state, "All India"] } });
        }

        // 3. Age Filter
        if (age) {
            andConditions.push({ minAge: { $lte: Number(age) } });
        }
        
        // 4. Income Filter (FIXED LOGIC)
        if (income) {
            // Hum $or ko $and array ke andar daal rahe hain
            andConditions.push({
                $or: [ 
                    { maxIncome: { $gte: Number(income) } }, // Ya toh limit user ki income se zyada ho
                    { maxIncome: { $eq: null } }           // Ya phir koi limit hi na ho
                ]
            });
        }

        // 5. Caste Filter
        if (caste && caste.toLowerCase() !== 'any') {
            andConditions.push({ caste: { $in: [caste, "Any"] } });
        }

        // 6. Disability Filter
        if (disability && disability.toLowerCase() !== 'any') {
            andConditions.push({ disability: { $in: [disability, "Any"] } });
        }

        // Final query object
        let query = {};
        if (andConditions.length > 0) {
            query = { $and: andConditions };
        }
        // Agar koi filter nahi hai, toh query khaali rahegi aur sab kuch find hoga

        console.log("Running FINAL filter query:", JSON.stringify(query)); // Server log check karein
        
        const schemes = await Scheme.find(query);
        
        console.log(`[DEBUG] Found ${schemes.length} schemes matching FINAL query.`);
        
        res.json(schemes);

    } catch (err) {
        res.status(500).json({ message: "Error fetching schemes", error: err });
    }
});


// --- Baaki file waisi hi hai ---
app.get('/api/schemes/latest', async (req, res) => {
  try {
    const latestSchemes = await Scheme.find().sort({ createdAt: -1 }).limit(5);
    res.json(latestSchemes);
  } catch (err) {
    res.status(500).json({ message: "Error fetching latest schemes", error: err });
  }
});

app.get('/api/seed-database', async (req, res) => {
    try {
        await Scheme.deleteMany({});
        await Scheme.insertMany(schemesData);
        res.status(201).json({ message: 'Database seeded successfully with 20 schemes!' });
    } catch (error) {
        res.status(500).json({ message: 'Error seeding database', error: error });
    }
});

console.log('Scheduler enabled: Will run scraping tasks daily at 5:00 AM.');
cron.schedule('0 5 * * *', () => {
    console.log('RUNNING CRON JOB: Calling all scrapers...');
    scrapeAndSaveSchemes();
    scrapeSJEWebsite();
}, {
    scheduled: true,
    timezone: "Asia/Kolkata"
});

app.listen(PORT, () => {
  console.log(`Server is running successfully on http://localhost:${PORT}`);
});