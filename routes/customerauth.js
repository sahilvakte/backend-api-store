const express = require('express')
const router = express.Router()

const CustomerController = require('../controllers/CustomerController')

router.post('/addcustomer',CustomerController.addcustomer)
router.get('/showcustomer',CustomerController.showcustomer)

module.exports=router