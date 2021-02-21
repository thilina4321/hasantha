const Customer = require("../model/customer");
const Vehicle = require("../model/vehicle");
const Appointment = require("../model/appointment");
const SuperAdmin = require("../model/super-admin");
const ServiceAgent = require("../model/service-agent");
const ServiceRecord = require("../model/service-records");
const bcrypt = require('bcryptjs')

exports.registor = async (req, res) => { 
  const adminData = req.body;

  try {
    const password = await bcrypt.hash(adminData.password, 8)
    const admin = new SuperAdmin({ ...adminData,password, role: "ADMIN" });
    const save = await admin.save();
    res.send({ admin: save });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const adminData = req.body;
  console.log(adminData);
  try {
    const {user, error} = await SuperAdmin.loginWithEmailAndPassword(adminData);
    if(error){
      return res.status(500).send({ error });
    }
    const {token, error:tokenError} = await user.generateToken();
    if(tokenError){
      return res.status(500).send({ error:tokenError });
    }
    res.send({ admin: user, token });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.serviceAgent = async (req, res) => {
  const agentData = req.body;
  try {
    const password = await bcrypt.hash(agentData.password, 8)
    const agent = new ServiceAgent({ ...agentData,password, role: "AGENT" });
    const save = await agent.save();
    res.send({ agent: save });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};


exports.getServiceAgents = async (req, res) => {
  try {
    
    const agents = await ServiceAgent.find()
    res.send({ agents: agents });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getCustomers = async (req, res) => {

  try {
      const customers = await Customer.find()
      res.send({customers})
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getVehicles = async (req, res) => {

  try {
      const vehicles = await Vehicle.find()
      res.send({vehicles})
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getServiceRecords = async (req, res) => {

  try {
      const records = await ServiceRecord.find()
      res.send({records})
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.deleteCustomer = async(req,res)=>{
  const id = req.params.id
    try {
      const customer = await Customer.findByIdAndDelete(id)
      res.send({message:"Delete succeedd", customer})
    } catch (error) {
res.status(500).send({error:error.message})
    }
}

exports.deleteVehicle = async(req,res)=>{
  const id = req.params.id
    try {
      const vehicle = await Vehicle.findByIdAndDelete(id)
            res.send({message:"Delete succeedd",  vehicle})

    } catch (error) {
res.status(500).send({error:error.message})
    }
}

exports.deleteRecord = async(req,res)=>{
  const id = req.params.id
    try {
      const record = await ServiceRecord.findByIdAndDelete(id)
            res.send({message:"Delete succeedd",  record})

    } catch (error) {
res.status(500).send({error:error.message})
    }
}

exports.deleteAgent = async(req,res)=>{
  const id = req.params.id
    try {
      const agent = await this.serviceAgent.findByIdAndDelete(id)
            res.send({message:"Delete succeedd",  agent})

    } catch (error) {
res.status(500).send({error:error.message})
    }
}





exports.editCustomer = async(req,res)=>{
  const id = req.params.id
  const data = req.body
    try {
      const customer = await Customer.findByIdAndUpdate(id, {...data}, {new:true})
      res.send({message:"Delete succeedd", customer})
    } catch (error) {
res.status(500).send({error:error.message})
    }
}

exports.editVehicle = async(req,res)=>{
  const id = req.params.id
    const data = req.body

    try {
      const vehicle = await Vehicle.findByIdAndUpdate(id, {...data}, {new:true})
            res.send({message:"Delete succeedd",  vehicle})

    } catch (error) {
res.status(500).send({error:error.message})
    }
}

exports.editRecord = async(req,res)=>{
  const id = req.params.id
    const data = req.body

    try {
      const record = await ServiceRecord.findByIdAndUpdate(id, {...data}, {new:true})
            res.send({message:"Delete succeedd",  record})

    } catch (error) {
res.status(500).send({error:error.message})
    }
}

exports.editAgent = async(req,res)=>{
  const id = req.params.id
    const data = req.body

    try {
      const agent = await serviceAgent.findByIdAndUpdate(id, {...data}, {new:true})
            res.send({message:"Delete succeedd",  agent})

    } catch (error) {
res.status(500).send({error:error.message})
    }
}
