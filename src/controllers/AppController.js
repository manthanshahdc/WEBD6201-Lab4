const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('../models/User');
const Contact = require('../models/Contact');

const { forwardAuthenticated } = require('../config/auth');

const AppAction = require('../actions/AppAction');

router.get('/', AppAction.home);

router.get('/services', AppAction.services);

router.get('/about-me', AppAction.aboutUs);

router.get('/projects', AppAction.projects);

router.get('/contact-me', AppAction.contactUs);

// Login Page
router.get('/login', forwardAuthenticated,AppAction.login);

// Register Page
router.get('/register', forwardAuthenticated,AppAction.register);

// Register
router.post('/register', (req, res) => {
  const { firstName, lastName, userName, email, password, password2 } = req.body;
  let errors = [];

  if (!firstName || !lastName || !userName || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      firstName, 
      lastName, 
      userName,
      email,
      password,
      password2
    });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          firstName, 
          lastName, 
          userName,
          email,
          password,
          password2
        });
      } else {
        const newUser = new User({
          displayName : firstName + " " + lastName,
          userName,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                  console.log("\nData Saved: ",user)
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Login
router.post('/login', (req, res, next) => {
  console.log("in login page")
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next);
});

router.get('/dashboard',(req, res) => {
  Contact.find({}, function (err, contacts) {
      if (err) {
        console.log("Error in fetching data from db");
      }
      
      return res.render("dashboard", {
          active: req.active,
          title:'Manthan Shah: Personal Portfolio Website',
          contact_list: contacts,
      });
    });
  });

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/login');
});

router.post('/create-contact', (req, res) => {
  Contact.create(
    {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email
    },
    function (err, newContact) {
      if (err) {
        console.log("Error in creating the contact");
        return;
      }
      return res.redirect('/dashboard');
    }
  );
});

router.get("/delete-contact", (req, res) => {
  console.log(req.query);
  let id = req.query.id;
  Contact.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log("Error in Deleting the contact");
    }
    return res.redirect('/dashboard');
  });
});



module.exports = router;
