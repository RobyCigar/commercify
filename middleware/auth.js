const passport = require('passport');
const User = require('../models/user')

const auth = passport.authenticate('jwt', { session: false });

module.exports = auth;