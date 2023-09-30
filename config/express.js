


// importing dependencies 
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyPraser = require('body-parser');
const methodOverride = require('method-override');


module.exports = () =>{
    var app = express();
    // Checking condition whether it is running in development or production 

    
    if (process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
        // Adds features called "request logging" (using morgan)used for finding and fixing issues.
    }
    else if(process.env.NODE_ENV === 'production'){
        app.use(compress());
        // Adds features called "response compression" (using compress) makes application faster by making date smaller over internet.
        // to handle many user in production 
    }

// Helping to understand the information put by user
app.use(bodyPraser.urlencoded({
    extended:true
    // Check complex data not just simple
}));
// If data send in JSON then making it understandable to use it
app.use(bodyPraser.json());
// Making site understand more advanced commands from client (Get, post, put , delete)
app.use(methodOverride());

// defining how website looks
app.set('views', './app/views');

//Turning templet into actual site
app.set('view engine', 'ejs');
// Handaling the routes as per user request
app.use('/', require('../app/routes/index.server.routes.js'))
//reuires('../app/routes/index.server.routes.js')(app);

// Extracting image file from public route
app.use(express.static('./public'));
// Serves static file from node modules directory
app.use(express.static("./node_modules"));
return app;
// Returning everything to be used in main site
};