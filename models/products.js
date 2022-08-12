const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name :{
        type : String
    },
    desc :{
        type : String
    },
    category :{
        type : String,
    },
     price :{
        type : String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,       //To store id of user
        ref:'User'
    }
},{timestamps:true})

const Products = mongoose.model('Products',UserSchema)
module.exports = Products;