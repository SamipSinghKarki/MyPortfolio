
// Checking value for node.env and if its value is set then it is that otherwise it will be developpment

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// import express module and requIRING custom module located in directory
var express = require('./config/express');

// invoking function return by express
var app = express();
// Accessing server at 3000 prot
app.listen(3000);
// Exporting for other part of code for testing
module.exports = app;
// Printing message 
console.log('Server running at http://localhost:3000/')