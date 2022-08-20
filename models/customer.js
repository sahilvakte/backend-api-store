const mongoose = require('mongoose')
const Schema = mongoose.Schema
const expressValidator = require('express-validator')

// var uniqueValidator = require('mongoose-unique-validator');

const CustomerSchema = new Schema({
    firstname :{
        type : String
    },
    lastname :{
        type : String
    },
    customeremail :{
        type : String,
    },
    customerphone :{
        type : String
    },
    customeraddress :{
        type : String
    }
},{timestamps:true})

const Customer = mongoose.model('Customer',CustomerSchema)
module.exports = Customer;