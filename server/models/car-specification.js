const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({

  car_id:{
    type : String
  },
  overview: {
    type: String,
  },
  engine_transmission: {
    type: String,
  },
  hybrid_system: {
    type: String,
  },
  performance_efficiency: {
    type: String,
  },
  exterior_equipment: {
    type: String,
  },
  interior_equipment: {
    type: String,
  },
  seats_upholstery: {
    type: String,
  },
  entertainment_front: {
    type: String,
  },
  entertainment_rear: {
    type: String,
  },
  safety_equipments: {
    type: String,
  },
  suspension_brakes_wheels_tyres: {
    type: String,
  },
  dimensions_weight_storage_capacity: {
    type: String,
  },
  warranty_service_package: {
    type: String,
  },
  exterior_colours: {
    type: String,
  }
})

const carSpecification = mongoose.model("car-specification", carSchema);

module.exports = carSpecification;