// Include Server Dependencies
const bodyParser = require('body-parser');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Use Express
const app = express();

// Bodyparser Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Serve our static assets
app.use(express.static(path.join(__dirname, 'public')));

// Set Templating engine as handlebars
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Require Our Routes
const routes = require('./controllers/routes.js');
app.use('/', routes);

// Listen on port. If undefined, use 3000
app.listen(process.env.PORT || 3000,function(){
  process.env.PORT == undefined? console.log("App listening on PORT 3000"):console.log("App listening on PORT" + process.env.PORT);
});