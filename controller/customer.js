const Customer = require("../model/customer");
const Vehicle = require("../model/vehicle");
const Appointment = require('../model/appointment')
const ServiceRecords = require('../model/service-records')
const bcrypt = require('bcryptjs')

exports.registor = async (req, res) => {
  const customerData = req.body;

  try {
    const password = await bcrypt.hash(customerData.password, 8)
    const customer = new Customer({ ...customerData,password, role: "CUSTOMER" });
    const save = await customer.save();
    res.send({ customer: save });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const customerData = req.body;

  try {
    const {user, error} = await Customer.loginWithEmailAndPassword(customerData);
    if(error){
      return res.status(500).send({ error });
    }
    const {token, error:tokenError} = await user.generateToken();
    if(tokenError){
      return res.status(500).send({ error:tokenError });
    }
    res.send({ customer: user, token });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.customerVehicle = async (req, res) => {
  const vehicleData = req.body;
  const customer = req.customer;
  try {
    const vehicle = new Vehicle({ ...vehicleData, customerId: customer });
    const save = await vehicle.save();
    res.send({ vehicle: save });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.editVehicle = async (req, res) => {
  const id = req.params.id;
  const customerData = req.body;
  try {
    const editCustomer = await Vehicle.findByIdAndUpdate(
      id,
      { ...customerData },
      { runValidators: true, new: true }
    );

    res.send({ customer: editCustomer });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.deleteVehicle = async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await Vehicle.findByIdAndDelete(id);
    res.send({ customer });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.placeAppointment = async (req, res) => {
  const appointmentData = req.body
  const customerId = req.customer
  try {
    const appointment = new Appointment({...appointmentData, customerId})
    const saved = await appointment.save()
    res.send({appointment:saved})
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.viewServiceRecords = async(req,res)=>{

  const id = req.customer
    try {
      const records = await ServiceRecords.find({customerId:id})
      res.send({records})
    } catch (error) {
      res.status(500).send({error:error.message})
    }
}
