const passport = require('./passport');
const jwt = require('jsonwebtoken');

const loginByGoogle = (req, res, next) => {
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.email'] })(req, res, next)
};

const getGoogleProfile = (req, res, next) => {
    passport.authenticate('google', { failureRedirect: '/login' })(req, res, next)
};

const checkToken = async (req, res, next) => {
    const token = req.cookies.jwt;
    try {
        const user = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (e) {
        res.send({ status: 'FAIL', message: '유효한 토큰이 존재하지 않습니다.' });
    }
};

module.exports = {
    loginByGoogle,
    getGoogleProfile,
    checkToken
};