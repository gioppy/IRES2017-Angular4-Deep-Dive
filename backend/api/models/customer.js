const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String },
  image: { type: String }
});

module.exports = mongoose.model('Customer', customerSchema);