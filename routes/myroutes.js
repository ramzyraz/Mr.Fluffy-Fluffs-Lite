const express = require('express');
const mycontroller = require('../controllers/mycontroller');
const router = express.Router();

// router.get('/:id', mycontroller.getUser);
// router.get('/signup', (req, res) => { res.render('signup') });
// router.get('/login', (req, res) => { res.render('login') });
router.post('/signup', mycontroller.registerUser);
router.post('/login', mycontroller.loginUser);
router.get('/logout', mycontroller.logOut);

module.exports = router;