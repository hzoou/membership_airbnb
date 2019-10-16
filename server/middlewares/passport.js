const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const USER = require('../models').USER;

module.exports = (passport) => {
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
            USER.findOrCreate({where: {google_id: profile.id }}).then((user) => {
                console.log('user: ', user);
                return done(null, user);
                // res.json(result);
            }).catch(function (err) {
                //TODO: error handling
            });
        })
    );
};