// Set Router Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
const app = express();

// Bodyparser Setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Redirect to landing route by default
router.get('/', function(req, res, next) {
    res.redirect('/home');
});

// GET Landing Route
router.get('/home', function(req, res, next) {
   res.render('index');
});

// GET About Route
router.get('/about', function(req, res, next) {
   res.render('about');
});

// GET Fences Route
router.get('/fences', function(req, res, next) {
   res.render('fences');
});


// GET Contact Route
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

// Post Contact Route
router.post('/contact', function(req, res, next){
	console.log(req.body);
});

// GET Error Route
router.get('/error', function(req, res, next) {
  // if template return res.render('login', { title: 'Log In'});
  res.render('error');
});

// Redirect if non-existant
router.use(function(req, res) {
    res.redirect('/error');
});


// Export Router
module.exports = router;