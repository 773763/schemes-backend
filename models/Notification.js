const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    title_en: { type: String, required: true },
    title_hi: { type: String, required: true },
    message_en: { type: String, required: true },
    message_hi: { type: String, required: true },
    icon: { type: String, default: 'bell-ring' },
    link: { type: String },
    isRead: { type: Boolean, default: false }
}, { timestamps: true }); // 'createdAt' field apne aap ban jayega

module.exports = mongoose.model('Notification', notificationSchema);