const express = require('express')
const router = express.Router()

const controller = require('../controller/service-agent')
const Auth = require('../middleware/service-agent')

router.post('/login', controller.login)
router.post('/record',Auth, controller.createRecord)
router.patch('/edit/:id',Auth, controller.editRecord)
router.delete('/delete/:id',Auth, controller.deleteRecord)
router.get('/view-service-recods',Auth, controller.viewServiceRecords)
router.get('/appintmants',Auth, controller.appointments)
router.post('/decision/:id',Auth, controller.appointmentDecision)


// view service records/ 
module.exports = router