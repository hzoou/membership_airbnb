const jwt = require('jsonwebtoken');

const publishToken = (req, res) => {
    const user = req.user[0];
    const payload = { name: user.name, email: user.email };
    const expiresIn = { expiresIn: '10m' };
    const token = jwt.sign(payload, process.env.JWT_SECRET, expiresIn);
    res.cookie("jwt", token, { httpOnly: true }).send({ user: user, token: token });
};

module.exports = {
    publishToken
};