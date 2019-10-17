const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.cookies.jwt;
    try {
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (e) {
        res.send({ msg: 'Invalid Token!! '});
    }
};