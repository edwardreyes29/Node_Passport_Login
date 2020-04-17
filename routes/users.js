/*
    Login Page
*/
const express = require('express');
const router = express.Router(); // Create express router

// Login Page
router.get('/login', (req, res) => res.render('login')); 

// Register Page
router.get('/register', (req, res) => res.render('register')); 

// Register Handle
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];

    // Check required fields
    if(!name || !email || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields' });
    }

    // Check passwords match
    if (password != password2) {
        errors.push({ msg: 'Passwords do not match' });
    }

     // Check pass length
    if(password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 characters'});
    }

    if(errors.length > 0) {
        // re-render registrations form
        res.render('register', {
            errors, // pass the errors
            name,   // pass data, don't want form to completely clear
            email,
            password,
            password2
        })
    } else {
        res.send('pass');
    }

    
});

module.exports = router;