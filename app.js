const express = require('express');
const mongoose = require('mongoose');
const morgan = require("morgan");
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const myroutes = require('./routes/myroutes');
const reciperoutes = require('./routes/reciperoutes');
const topsroutes = require('./routes/toppings');
const orderroutes = require('./routes/order');
require('dotenv').config()
const app = express();

// view engine
app.set('view engine', 'ejs');

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then(() =>   console.log('Connected to the Database'))
  .catch((err) => console.log(err));
  
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({credentials: true, origin: 'http://localhost:3000'})); 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Initialized Routes
app.use(myroutes);
app.use(reciperoutes);
app.use(topsroutes);
app.use(orderroutes);
app.listen(process.env.PORT || 5000, () => console.log("Server has Started"))