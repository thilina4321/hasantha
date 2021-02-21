const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  
  vehicleId:{
      type:Schema.Types.ObjectId,
      ref:'Vehicle'
  },
  customerId:{
    type:Schema.Types.ObjectId,
    ref:'Customer'
  },
  customerName:String,
  vehicleType:String,
  vehicleColor:String,
  
  serviceCategory:String,
  date:{
    type:Date,
    default:Date.now()
  },
  price:{
      type:Number

  },
  status:{
    type:String,
    default:"PENDING"
  }
  
});

module.exports = mongoose.model("Appointment", appointmentSchema);
