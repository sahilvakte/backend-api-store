const express = require('express')
const router = express.Router()

const GoogleLoginCOntroller = require('../controllers/GoogleauthController')

router.post('/googleauthlogin',GoogleLoginCOntroller.googlelogin)

module.exports=router