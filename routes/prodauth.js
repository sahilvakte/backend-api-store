const express = require('express')
const router = express.Router()

const ProdController = require('../controllers/Addproduct')

router.post('/addproduct',ProdController.addproducts)
router.get('/',ProdController.index)

module.exports=router