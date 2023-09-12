const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const categoryRouter = require('./routes/categoryRoute');
const cors = require('cors');

require("dotenv/config");

const api = process.env.API_URL;

//middleware
app.use(cors());
//
// As of Express version 4.16.0, the body-parser middleware has been bundled with Express
app.use(express.json());
app.use(morgan("combined"));



// database
mongoose
  .connect(
    "mongodb+srv://jossanbrothers:jossansaab99@cluster0.g9acqug.mongodb.net/ecommerce?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }
  )
  .then(() => {
    console.log("successfull");
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(express.json())


app.use('/addproducts', require('./routes/productRoute'));
app.use('/products', require('./routes/productRoute'));

app.use('/',categoryRouter)


app.listen(3002, () => {
  console.log("server is running");
});


