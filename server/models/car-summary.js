const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  car_id:{
    type : String
  },
  ownership: {
    type: String,
  },
  manufacturing_year: {
    type: String,
  },
  vehicle_type: {
    type: String,
  },
  insurance_validity: {
    type: String,
  },
  engine: {
    type: String,
  },
  transmission: {
    type: String,
  },
  peak_torque: {
    type: String,
  },
  peak_power: {
    type: String,
  },
  seating_capacity: {
    type: String,
  },
  fuel: {
    type: String,
  },
  kms_driven: {
    type: String,
  },
})

const carSummary = mongoose.model("car-summary", carSchema);

module.exports = carSummary;