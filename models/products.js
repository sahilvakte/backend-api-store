const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name :{
        type : String,
        required:true
    },
    desc :{
        type : String,
        required:true
    },
    category :{
        type : String,
        required:true
    },
     price :{
        type : Number,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,       //To store id of user
        ref:'User'
    }
},{timestamps:true})

const Products = mongoose.model('Products',ProductSchema)
module.exports = Products;