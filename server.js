// Include Server Dependencies
const bodyParser = require('body-parser');
const express = require('express');

// Use Express
const app = express();

// Bodyparser Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Require Our Routes
const routes = require('./controllers/routes.js');
app.use('/', routes);

// Serve our static assets
app.use(express.static(__dirname + '/public'));

// Listen on port. If undefined, use 3000
app.listen(process.env.PORT || 3000,function(){
  process.env.PORT == undefined? console.log("App listening on PORT 3000"):console.log("App listening on PORT" + process.env.PORT);
});