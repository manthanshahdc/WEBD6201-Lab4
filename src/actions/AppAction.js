

module.exports = {

    home: function (req, res) {
        res.render('home', {
                active: req.active,
                title:'Manthan Shah: Personal Portfolio Website',
            });
    },

    services: function (req, res) {
        res.render('services', {
                active: req.active,
                title:'Manthan Shah: Personal Portfolio Website',
            });
    },

    aboutUs: function (req, res) {
        res.render('about-me', {
            active: req.active,
            title:'Manthan Shah: Personal Portfolio Website',
        });
    },
 
    projects: function (req, res) {
      res.render('projects', {
        active: req.active,
        title: 'Manthan Shah: Personal Portfolio Website',
      });
    },

    team: function (req, res) {
        res.render('team', {
            active: req.active,
            title:'Manthan Shah: Personal Portfolio Website',
        });
    },

    contactUs: function (req, res) {
        res.render('contact-us', {
            active: req.active,
            title:'Manthan Shah: Personal Portfolio Website',
        });
    },

    login: function (req, res) {
        res.render('login', {
            active: req.active,
            title:'Manthan Shah: Personal Portfolio Website',
        });
    },

    register: function (req, res) {
        res.render('register', {
            active: req.active,
            title:'Manthan Shah: Personal Portfolio Website',
        });
    },

};
