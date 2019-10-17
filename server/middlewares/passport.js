const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const USER = require('../models').USER;

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/api/login/complete'
    }, (accessToken, refreshToken, profile, done) => {
        const user = profile._json;
        USER.findOrCreate({
            where: { google_id: user.sub, email: user.email, name: user.name, image: user.picture },
            raw : true
        }).then((user) => {
            return done(null, user);
        }).catch(function (err) {
            console.log('err: ', err);
            return done(err);
        });
    })
);

module.exports = passport;