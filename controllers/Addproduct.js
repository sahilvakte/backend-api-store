const Products = require("../models/products");
const bcrypt = require("bcryptjs");
const { response } = require("express");
const jwt = require("jsonwebtoken");

// ADD Products
const addproducts = (req, res, next) => {
  const verifyTok = req.body.token;

  if (verifyTok) {
    jwt.verify(verifyTok, "AzQ,PI)0(", function (err, result) {
      if (err) {
        console.log("err", err);
      }
      let products = new Products({
        name: req.body.name,
        desc: req.body.desc,
        category: req.body.category,
        price: req.body.price,
        userId:result.id
      });

      products
        .save()
        .then((user) => {
          return res.json({
            message: "Product Added Successfully !",
          });
        })
        .catch((error) => {
          console.log("Error", error);
          return res.json({
            message: "An Error Occured !!!",
          });
        });
    });
  } else {
    return res.json({
      message: "An Error Occured !!!",
    });
    console.log("Token is required");
  }
};

// Show all Products
const index = (req, res, next) => {
  Products.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured",
      });
    });
};

module.exports = {
  addproducts,
  index,
};
