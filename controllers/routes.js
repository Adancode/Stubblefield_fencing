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
    res.redirect('/landing');
});

// GET Landing Route
router.get('/landing', function(req, res, next) {
   res.render('index');
});

// GET About Route
router.get('/about', function(req, res, next) {
   res.send('About Page');
});

// GET Fences Route
router.get('/fences', function(req, res, next) {
   res.send('Fence Page');
});

/*
// GET Contact Route
router.get('/contact', function(req, res, next) {
  // if template return res.render('login', { title: 'Log In'});
  res.sendFile(path.join(__dirname, "../views/login.html"));
});
*/

// Initial load/direct
router.use(function(req, res) {
    res.redirect('/landing');
});

// Export Router
module.exports = router;