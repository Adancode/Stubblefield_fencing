// Include Server Dependencies
const bodyParser = require('body-parser');
const express = require('express');
const exphbs = require('express-handlebars');

// Use Express
const app = express();

// Bodyparser Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Set Templating engine as handlebars
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Require Our Routes
const routes = require('./controllers/routes.js');
app.use('/', routes);

// Serve our static assets
app.use(express.static(__dirname + '/public'));

// Listen on port. If undefined, use 3000
app.listen(process.env.PORT || 3000,function(){
  process.env.PORT == undefined? console.log("App listening on PORT 3000"):console.log("App listening on PORT" + process.env.PORT);
});