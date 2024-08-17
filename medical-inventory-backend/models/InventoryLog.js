const mongoose = require('mongoose');

const InventoryLogSchema = new mongoose.Schema({
    box: { type: mongoose.Schema.Types.ObjectId, ref: 'Box', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    action: { type: String, enum: ['added', 'removed', 'updated'], required: true },
    item: { type: String, required: true },
    quantity: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

// Check if the model is already compiled
module.exports = mongoose.models.InventoryLog || mongoose.model('InventoryLog', InventoryLogSchema);
