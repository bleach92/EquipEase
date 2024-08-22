const mongoose = require('mongoose');

const BoxSchema = new mongoose.Schema({
  identifier: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  items: [{
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
  }],
});

module.exports = mongoose.models.Box || mongoose.model('Box', BoxSchema);
