const jwt = require('jsonwebtoken');
const User = require('../model/user');

const requireAuth = (req, res, next) => {
    const token = req.cookies.usercookie;
    // Check json web token exists and isVerified
    if (token) {
        jwt.verify(token, process.env.COOKIE_SECRET, (err, decoded) => {
            if (err) {
                res.redirect('/login');
            } else {
                next();
            }
        })
    }
    else {
        res.redirect('/login');
    }
}

// check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.usercookie;
    // Check json web token exists and isVerified
    if (token) {
        jwt.verify(token, process.env.COOKIE_SECRET, async (err, decoded) => {
            if (err) {
                res.locals.user = null;
                next();
            } else {
                let user =  await User.findById(decoded.id);
                res.locals.user = user;
                next()
            }
        })
    }
    else {
        res.locals.user = null;
        next();
    }
}

module.exports = { requireAuth, checkUser };