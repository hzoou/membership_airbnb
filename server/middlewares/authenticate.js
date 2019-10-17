const passport = require('./passport');

const loginAuth = (req, res, next) => {
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.email'] })(req, res, next)
};

const loginCompleteAuth = (req, res, next) => {
    passport.authenticate('google', { failureRedirect: '/login' })(req, res, next)
};

module.exports = {
    loginAuth,
    loginCompleteAuth
};