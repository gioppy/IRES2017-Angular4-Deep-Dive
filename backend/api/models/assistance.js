const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  description: { type: String, default: '' },
  includedAccessories: [{ type: String }],
  backupData: { type: Boolean, default: false },
  created: { type: Date, default: new Date() },
  expired: { type: Date },
  state: { type: String, required: true, default: 'created' },
  notes: { type: String }
});

module.exports = mongoose.model('Order', orderSchema);