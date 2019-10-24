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
    }, async (accessToken, refreshToken, profile, done) => {
        const userInfo = profile._json;
        let [ user, created ] = await USER.login(userInfo);
        if (created) user = user.get({ plain: true });
        if (user) return done(null, user);
        return done(null, false);
    })
);

module.exports = passport;