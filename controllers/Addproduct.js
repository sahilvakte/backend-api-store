const Products = require("../models/products");
const bcrypt = require("bcryptjs");
const { response } = require("express");

// ADD Products
const addproducts = (req, res, next) => {
  let products = new Products({
    name: req.body.name,
    desc: req.body.desc,
    category: req.body.category,
    price: req.body.price,
    // userId:
  });

  products
    .save()
    .then((user) => {
      res.json({
        message: "Product Added Successfully !",
      });
    })
    .catch((error) => {
      console.log("Error", error);
      res.json({
        message: "An Error Occured !!!",
      });
    });
};

const index =(req,res,next)=>{
  Products.find()
  .then(response =>{
    res.json({
      response
    })
  })
  .catch(error =>{
    res.json({
      message:'An error Occured'
    })
  })
}



module.exports = {
  addproducts,
  index,
};
