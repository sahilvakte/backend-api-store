const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const cors=require("cors");


// Routes File

const AuthRoute = require('./routes/auth')
const AddprodRoute = require('./routes/prodauth')
const CustomerController = require('./routes/customerauth')

mongoose.connect("mongodb://localhost:27017/storeapi", {useNewUrlParser: true,
useUnifiedTopology: true,})
const db = mongoose.connection

db.on("error", (err) => {
    console.log(err);
  });
  
  db.once("open", () => {
    console.log("Database Connection Established!");
  });

  const app = express();

app.use(cors())
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  app.use('/api',AuthRoute)
  app.use('/prodapi',AddprodRoute)
  app.use('/customerapi',CustomerController)


  let arr = [{ id: 1, username: 'fred' }, { id: 2, username: 'bill' }, { id: 3, username: 'ted' }];
  let found = arr.some(ele => ele.username === 'bdill');
  console.log("found",found)