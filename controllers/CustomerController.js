const Customer = require("../models/customer");
const bcrypt = require("bcryptjs");

// REGISTRATION

const addcustomer = (req, res, next) => {
 
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
      console.log("Error", error);
      res.json({
        message: "An Error Occured !!!",
      });
    });
};

const showcustomer = (req, res, next) => {
  Customer.find()
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
  addcustomer,
  showcustomer
};
