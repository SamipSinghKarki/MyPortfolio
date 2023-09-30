


// importing express module and intance for router class form express 



var express = require('express');
var router = express.Router();

/*GET home page.*/

// Handling the URL and rendering the each page with respective title

router.get('/', function (req, res, next){
    res.render('index', {title: 'Home'});
});

router.get('/home', function (req, res, next){
    res.render('home', {title: 'Home'});
});
router.get('/about', function (req, res, next){
    res.render('about', {title:'About'});
});

router.get('/products', function (req, res, next){
    res.render('products', {title: 'Products'});
});

router.get('/contact', function (req, res, next){
    res.render('contact', {title: 'Contact'});
});

router.get('/services', function (req, res, next){
    res.render('services', {title: 'Services'});
});
router.get('/thank', function (req, res, next){
    res.render('thank', {title:'Thank'});
});

// Exporting router to be used in main file.
module.exports = router;