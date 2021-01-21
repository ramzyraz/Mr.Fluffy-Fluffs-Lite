const express = require('express');
const mycontroller = require('../controllers/mycontroller');
const router = express.Router();

router.get('/', (req, res) => { res.send("This is a Backend Server for Mr. Fluffy Fluffs") });
router.get('/login', (req, res) => { res.render('login') });
router.post('/signup', mycontroller.registerUser);
router.post('/login', mycontroller.loginUser);
router.get('/logout', mycontroller.logOut);

module.exports = router;