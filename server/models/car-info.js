const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image:{
    type : String
  },
  company: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  body_type:{
    type : String
  },
  reg_year: {
    type: Number,
    required: true,
  },
  kms: {
    type: Number,
    required: true,
  },
  fuel_type: {
    type: String,
    required: true,
  },
  reg_state: {
    type: String,
    required: true,
  },
});

const car = mongoose.model("car-info", carSchema);

module.exports = car;

