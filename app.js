const express = require('express');
const req = require('express/lib/request');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors')

const app = express();

//cors issue
app.use(cors())

//middleware for parsing json data and should be above
//rest of middleware
app.use(bodyParser.json());




//middlewares -> always executes when calling a fucntion
//basically a middle man while calling routes
//used in auths 


//midleware for setting routes
const postRoute = require('./routes/post');

app.use('/post', postRoute);


//listen on a port
app.listen(3000);
console.log("started server")
