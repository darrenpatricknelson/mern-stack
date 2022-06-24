// the is the schema for the car
const mongoose = require('mongoose');

let CarSchema = mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  make: {
    type: String,
    required: true
  },
  registration: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Car', CarSchema);
