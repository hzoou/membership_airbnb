const jwt = require('jsonwebtoken');

const loginComplete = (req, res) => {
    const user = req.user[0];
    const token = jwt.sign(
        {
            name: user.name,
            email: user.email,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '10m'
        });
    res.cookie("jwt", token, { httpOnly: true }).send({ user: user, token: token });
};

module.exports = {
    loginComplete
};