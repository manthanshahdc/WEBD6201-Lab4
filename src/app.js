/*
File name = App.js
Student’s Name = Manthan Shah
StudentID = 100776892
Date = 12/04/21
*/

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');

const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const engine = require('ejs-locals');
const compression = require('compression');

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(function(req, res, next){
    req.active = req.path.split('/')[1];
    next();
});

// set the view engine to ejs
app.engine('ejs', engine);
app.use(expressLayouts);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));



app.use(compression());

const oneYear = 1 * 365 * 24 * 60 * 60 * 1000;
app.use(express.static(path.join(__dirname, '/dist/')));

// Express body parser
app.use(express.urlencoded({ extended: true }));


// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );
  
  // Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());
  
  // Connect flash
  app.use(flash());

  // Global variables
  app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });

  
router.use('/', require('./controllers/AppController'));

app.use('/',router);
  

app.set('view options', { layout: 'layout' });

module.exports = app;
