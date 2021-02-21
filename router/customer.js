const express = require('express')
const router = express.Router()

const controller = require('../controller/customer')
const Auth = require('../middleware/customer')

router.post('/signup', controller.registor)
router.post('/login', controller.login)
router.post('/vehicle',Auth, controller.customerVehicle)
router.patch('/edit/:id',Auth, controller.editVehicle)
router.delete('/delete/:id',Auth, controller.deleteVehicle)
router.post('/appointment',Auth, controller.placeAppointment)
router.get('/view-service-records', Auth, controller.viewServiceRecords)

// view service records/ 

module.exports = router