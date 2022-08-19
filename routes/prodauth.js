const express = require('express')
const router = express.Router()

const ProdController = require('../controllers/Addproduct')

router.post('/addproduct',ProdController.addproducts)
router.get('/showproduct',ProdController.index)

module.exports=router