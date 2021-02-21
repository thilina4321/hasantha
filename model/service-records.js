const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceRecords = new Schema({
  customerId:{
      type:Schema.Types.ObjectId,
      ref:'Customer'
  },
  vehicleId:{
      type:Schema.Types.ObjectId,
      ref:'Vehicle'
  },
  customerName:String,
  vehicleType:String,
  vehicleColor:String,
  serviceCategory:String,
  date:{
    type:Date,
    default:Date.now()
  },
  completeDate:String,
  status:{
    type:String
  }
});

module.exports = mongoose.model("ServiceRecord", serviceRecords);
