const jwt = require('jsonwebtoken');

const publishToken = (req, res) => {
    const payload = { id: req.user.id, name: req.user.name, image: req.user.image };
    const expiresIn = { expiresIn: '7d' };
    const token = jwt.sign(payload, process.env.JWT_SECRET, expiresIn);
    res.cookie("jwt", token).redirect('http://localhost:3000');
};

const sendUserData = (req, res) => {
    res.send({ status: 'SUCCESS', message: '유효한 토큰입니다.', data: req.user });
};

module.exports = {
    publishToken,
    sendUserData
};