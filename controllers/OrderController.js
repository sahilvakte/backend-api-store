const Order = require("../models/orderModel");
const bcrypt = require("bcryptjs");


// REGISTRATION

const addorder = (req, res, next) => {

  
 
  let order = new Order({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    customeremail: req.body.customeremail,
    customerphone: req.body.customerphone,
    customeraddress: req.body.customeraddress,
    orderitem:req.body.orderitem,
    productname: req.body.productname,
    category: req.body.category,
    price: req.body.price,
    quantity : req.body.quantity,
    totalprice : req.body.totalprice,
    totalamount: req.body.totalamount,
    customerid:req.body.customerid,
    // userId:result.id
  });

  order
    .save()
    .then((customer) => {
      res.json({
        message: "Order Manually Created Successfully !",
      });
    })
    .catch((error) => {
      console.log("Error", error);
      res.json({
        message: "An Error Occured !!!",
      });
    });
};

const showorder = (req, res, next) => {
  Order.find()
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
    addorder,
    showorder
};
