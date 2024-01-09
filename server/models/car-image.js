const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  images: {
    type: String,
  },
  car_id: {
    type: String,
  }
});

const Images = mongoose.model("car-images", carSchema);

module.exports = Images;
