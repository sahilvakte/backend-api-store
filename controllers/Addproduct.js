const Products = require("../models/products")
const bcrypt = require("bcryptjs");


const addproducts = (req, res, next) => {

  

      let products = new Products({
        name: req.body.name,
        desc: req.body.desc,
        category: req.body.category,
        price: req.body.price,
      });

      products
        .save()
        .then((user) => {
          res.json({
            message: "Product Added Successfully !",
          });
        })
        .catch((error) => {
          console.log("Error",error)
          res.json({
            message: "An Error Occured !!!",
          });
        });
    
  };

  module.exports = {
    addproducts
  }
