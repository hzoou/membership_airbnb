const jwt = require('jsonwebtoken');

const publishToken = (req, res) => {
    const payload = { name: req.user.name, email: req.user.email };
    const expiresIn = { expiresIn: '10m' };
    const token = jwt.sign(payload, process.env.JWT_SECRET, expiresIn);
    res.cookie("jwt", token, { httpOnly: true }).send({ user: req.user, token: token });
};

module.exports = {
    publishToken
};