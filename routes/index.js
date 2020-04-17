const express = require('express');
const router = express.Router(); // Create express router
const { ensureAuthenticated } = require('../config/auth');

// Welcome
router.get('/', (req, res) => res.render('welcome')); // get request (request, respond) -> render welcome.ejs

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => 
    res.render('dashboard', {
        name: req.user.name
    }));

module.exports = router;