const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GoogleAuthSchema = new Schema({
    email :{
        type : String,
        // required:true
    },
    name :{
        type : String,
        // required:true
    },
    imageUrl :{
        type : String,
        required:true
    },

},{timestamps:true})

const GoogeAuthentication = mongoose.model('GoogeAuthentication',GoogleAuthSchema)
module.exports = GoogeAuthentication;