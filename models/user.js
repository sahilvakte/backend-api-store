const mongoose = require('mongoose')
const Schema = mongoose.Schema
const expressValidator = require('express-validator')

// var uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
    fname :{
        type : String,
        // required:true
    },
    lname :{
        type : String,
        // required:true
    },
    email :{
        type : String,
        required:[true,"Email already exists"],
        unique:true
    },
    phone :{
        type : String,
        required:[true,"Number already exists"],
        unique:true
    },
    password :{
        type : String,
        required:true
    }
},{timestamps:true})

const User = mongoose.model('User',UserSchema)
module.exports = User;