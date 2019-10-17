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
        callbackURL: '/api/login/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        USER.findOrCreate({where: {google_id: profile.id, name: profile.displayName, image: profile.photos[0].value }}).then((user) => {
            return done(null, user);
        }).catch(function (err) {
            console.log('err: ', err);
            return done(err);
        });
    })
);

module.exports = passport;