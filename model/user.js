const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter an password'],
        minlength: [6, 'Password needs be larger than 6 characters'],
    },
});

// UTILITY FUNCTIONS
UserSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Is used for checking passwords and confirming if entered data is correct or not
UserSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
      const passwordChecker = await bcrypt.compare(password, user.password);
      if (passwordChecker) {
        return user;
      }
      throw Error("Email or Password is incorrect")
    }
    throw Error("Email or Password is incorrect")
}

module.exports = mongoose.model('Userbase', UserSchema);