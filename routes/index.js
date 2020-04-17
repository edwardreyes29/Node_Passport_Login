const express = require('express');
const router = express.Router(); // Create express router

router.get('/', (req, res) => res.render('welcome')); // get request (request, respond) -> render welcome.ejs

module.exports = router;