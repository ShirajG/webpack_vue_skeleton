var express = require('express');
var consign = require('consign');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var morgan = require('morgan');
var app = express();
var models = require('./app/models');

//Set port to env.Port or default to 8080
app.set('port', process.env.PORT || 8080);

//set view engine
app.set('view engine', 'ejs');
app.set('views', './app/views');

//middleware for security
app.use(helmet.hidePoweredBy({setTo: 'PHP 5.5.14'}));
app.use(helmet.xframe());
app.use(helmet.xssFilter());
app.use(helmet.nosniff());

// setup the logger
app.use(morgan("short"));

// to support JSON-encoded bodies
app.use( bodyParser.json() );

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());

//Use the public folder for static files
app.use(express.static(__dirname + '/public'));

//configure mvc
consign({cwd:'app'})
  .then('controllers')
  .then('routes')
  .into(app);

models.sequelize.sync().then( function() {
  app.listen(app.get('port'), function() {
    console.log('App listening at port ' + app.get('port'));
  });
})
