const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
    required: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  modelYear: {
    type: String,
    required: true,
  },
  manufactureYear: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    require: true,
  },
  mileage: {
    type: String,
  },
  onlyOwner: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    required: true,
    enum: ['AVAILABLE', 'SOLD'],
    trim: true,
    default: 'AVAILABLE',
  },
  price: {
    type: Number,
    required: true,
  },
  pictures: [{ base64: { type: String } }],
});

// Duplicate the ID field.
VehicleSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
VehicleSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
