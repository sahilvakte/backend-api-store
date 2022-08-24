const express = require('express')
const router = express.Router()

const CustomerController = require('../controllers/OrderController')

router.post('/addorder',CustomerController.addorder)
router.get('/showorder',CustomerController.showorder)

module.exports=router