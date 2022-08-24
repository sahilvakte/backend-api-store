const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const OrderSchema = new Schema(
  {
    firstname: {
      type: String,
      required:true
    },
    lastname: {
      type: String,
      required:true
    },
    customeremail: {
      type: String,
      required:true
    },
    customerphone: {
      type: Number,
      required:true
    },
    customeraddress: {
      type: String,
      required:true
    },
    orderitem: [
      {
        name: {
          type: String,
          required:true
        },
        category: {
          type: String,
          required:true
        },
        price: {
          type: Float,
          required:true
        },
        qty: {
          type: Number,
          required:true
        },
      },
    ],
    totalamount: {
      type: Float,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId, //To store id of user
      ref: "User",
    },
    customerid: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId, //To store id of user
      ref: "User",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
