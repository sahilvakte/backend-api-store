const Customer = require("../models/customer");
const bcrypt = require("bcryptjs");

// REGISTRATION

const addcustomer = (req, res, next) => {

    //This process encrypt the password submitted and if any error occured it will return the error

    // bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    //   if (err) {
    //     res.json({
    //       error: err,
    //     });
    //   }
  
      // Registration for New Customer Manually

      let customer = new Customer({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        customeremail: req.body.customeremail,
        customerphone: req.body.customerphone,
        customeraddress: req.body.customeraddress,
      });

      customer
        .save()
        .then((customer) => {
          res.json({
            message: "Customer Manually Added Successfully !",
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
    addcustomer,
  }