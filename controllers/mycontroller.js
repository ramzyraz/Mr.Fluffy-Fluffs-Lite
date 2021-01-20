const jwt = require("jsonwebtoken");
const UserSchema = require('../model/user');

// ERROR HANDLING
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // Incorrect email
  if (err.message === 'Email or Password is incorrect') {
    errors.email = 'Email or Password is incorrect';
    errors.password = 'Email or Password is incorrect';
  }

  // Duplicate email error
  if (err.code === 11000) {
    errors.email = 'This email is already registered';
    return errors;
  }

  // Updating Errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

const maxAge = 1 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.COOKIE_SECRET, {
    expiresIn: maxAge
  });
}

// controller actions
module.exports.getUser = async (req, res) => {
  try {
    const user = await UserSchema.findById(req.params.id);
    res.status(200).send(user);
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

module.exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await UserSchema.create({ name, email, password });
    const token = createToken(user._id);
    res.cookie('usercookie', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

module.exports.loginUser = async (req, res) => {
  const { _, email, password } = req.body;

  try {
    const user = await UserSchema.login(email, password);
    const token = createToken(user._id);
    res.cookie('usercookie', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user });
  }
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}

module.exports.logOut = (req, res) => {
  res.cookie('usercookie', '', { maxAge: 1 });
  res.clearCookie('usercookie');
  res.redirect('/login');
}