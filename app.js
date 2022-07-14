const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const router = require('./src/route/api');


// Security Middleware Declare
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const path= require('path');

// Database Import 
const mongoose = require('mongoose');
app.use(express.static('client/build'));
app.use(express.json());
// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(bodyParser.json());


//Request Rate Limit
const limiter = rateLimit({windowMs:15*60*100, max:3000});
app.use(limiter);

// Database Connection
// UserName/Pass= testUser6666 
const URI = "mongodb+srv://<username>:<password>@cluster0.ergjf.mongodb.net/crud";
const option = {user:"testUser6666", pass:'testUser6666', autoIndex:true};
mongoose.connect(URI, option, (error)=>{
    console.log('Database Connection Success');
    console.log(error);
})

// Frontend Tagging
app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
})

//Routing Implement
app.use('/api/v1', router);


// If Undefined Route Implement
app.use('*', (req,res) => {
    res.status(404).json({status:"failed",data:"URL not Found"})
});

module.exports = app;
