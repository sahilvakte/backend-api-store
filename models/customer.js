const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const expressValidator = require("express-validator");

// var uniqueValidator = require('mongoose-unique-validator');

const CustomerSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    customeremail: {
      type: String,
      required: [true, "Email already exists"],
      unique: true,
    },
    customerphone: {
      type: Number,
      required: [true, "Email already exists"],
      unique: true,
      min: [10, "Number Should be of 10 Digits"],
      max: [10, "Number Should be of 10 Digits"],
    },
    customeraddress: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", CustomerSchema);
module.exports = Customer;
