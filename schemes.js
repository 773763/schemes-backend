const mongoose = require('mongoose');

// Yeh humara naya schema hai (jismein caste ek Array hai)
const SchemeSchema = new mongoose.Schema({
    // Language fields
    title_en: { type: String, required: true },
    title_hi: { type: String, required: true },
    description_en: { type: String, required: true },
    description_hi: { type: String, required: true },
    eligibility_en: { type: String },
    eligibility_hi: { type: String },
    
    // Category & State fields
    category: { type: String, required: true, index: true },
    applicable_states: [{ type: String, index: true }], // Yeh ek Array hai

    // Filter fields
    minAge: { type: Number, default: 0 },
    maxIncome: { type: Number },
    caste: [{ type: String }], // <-- YEH BHI EK ARRAY HONA CHAHIYE
    disability: { type: String, default: 'Any' }, 

    // Other fields
    official_link: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Scheme', SchemeSchema);