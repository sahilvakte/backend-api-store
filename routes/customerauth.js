const express = require('express')
const router = express.Router()

const CustomerController = require('../controllers/CustomerController')

router.post('/addcustomer',CustomerController.addcustomer)

module.exports=router