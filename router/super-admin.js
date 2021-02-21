const express = require('express')
const router = express.Router()

const controller = require('../controller/super-admin')
const Auth = require('../middleware/super-admin')

router.post('/signup', controller.registor)
router.post('/login', controller.login)
router.get('/customer',Auth, controller.getCustomers)
router.get('/vehicles',Auth, controller.getVehicles)
router.get('/records',Auth, controller.getServiceRecords)
router.post('/agent',Auth, controller.serviceAgent) 
router.get('/agents',Auth, controller.getServiceAgents) 

router.delete('delete-customer/:id',Auth, controller.deleteCustomer)
router.delete('delete-vehicle/:id',Auth, controller.deleteVehicle)
router.delete('delete-record/:id',Auth, controller.deleteRecord)
router.delete('delete-agent/:id',Auth, controller.deleteAgent)

router.patch('edit-customer/:id',Auth, controller.editCustomer)
router.patch('edit-vehicle/:id',Auth, controller.editVehicle)
router.patch('edit-record/:id',Auth, controller.editRecord)
router.patch('edit-agent/:id',Auth, controller.editAgent)

module.exports = router