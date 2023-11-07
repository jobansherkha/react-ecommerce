const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const categoryRouter = require('./routes/categoryRoute');
const userRouter = require('./routes/userRoute');
const OrderRouter = require('./routes/orderRoute');
const cors = require('cors');

require("dotenv/config");

const api = process.env.API_URL;

//middleware
app.use(cors());
//
// As of Express version 4.16.0, the body-parser middleware has been bundled with Express
app.use(express.json());
app.use(morgan("combined"));

// admin user 



// database
mongoose
  .connect(
    process.env.MONGODB,{
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

  


app.use('/product', require('./routes/productRoute'))




app.use('/category',categoryRouter)
app.use('/user',userRouter)
app.use('/', OrderRouter)

const ipaddress = '54.90.83.200'
app.listen( 3002,ipaddress , () => {
  console.log("server is running");
});


