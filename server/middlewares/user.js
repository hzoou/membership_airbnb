const jwt = require('jsonwebtoken');

const publishToken = (req, res) => {
    const payload = { id: req.user.id, name: req.user.name, email: req.user.email };
    const expiresIn = { expiresIn: '7d' };
    const token = jwt.sign(payload, process.env.JWT_SECRET, expiresIn);
    res.cookie("jwt", token, { httpOnly: true }).redirect('http://localhost:3000');
};

module.exports = {
    publishToken
};