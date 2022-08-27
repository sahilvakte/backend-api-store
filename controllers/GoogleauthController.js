const GoogeAuthentication = require("../models/googleauthModel");
const bcrypt = require("bcryptjs");
const { response } = require("express");
const jwt = require("jsonwebtoken");

const googlelogin = (req, res, next) => {

      let userlogin = new GoogeAuthentication({
        email: req.body.email,
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        // userId:result.id
      });

      userlogin
        .save()
        .then((user) => {
          return res.json({
            message: "Log In Successfully !",
          });
        })
        .catch((error) => {
          console.log("Error", error);
          return res.json({
            message: "An Error Occured !!!",
          });
        });
    }

module.exports = {
  googlelogin,
};
