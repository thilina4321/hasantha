const express = require("express");
const mongoose = require("mongoose");
const app = express();
const admin = require('./router/super-admin')
const agent = require('./router/service-agent')
const customer = require('./router/customer')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT;

app.use(express.json());
app.use(cors())

app.use('/admin', admin)
app.use('/agent', agent)
app.use('/customer', customer)

app.listen(port, () => {
  mongoose
    .connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connect ", port);
    })
    .catch((error) => {
      console.log(error);
    });
});


// heroku @1newflowers
// mongo 
