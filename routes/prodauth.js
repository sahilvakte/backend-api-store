const express = require('express')
const router = express.Router()

const ProdController = require('../controllers/Addproduct')

router.post('/addproduct',ProdController.addproducts)


module.exports=router