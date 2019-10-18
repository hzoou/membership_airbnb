const jwt = require('jsonwebtoken');

const publishToken = (req, res) => {
    const payload = { id: req.user.id, name: req.user.name, email: req.user.email };
    const expiresIn = { expiresIn: '7d' };
    const token = jwt.sign(payload, process.env.JWT_SECRET, expiresIn);
    res.cookie("jwt", token, { httpOnly: true }).send({ status: 'SUCCESS', message: '로그인이 완료되었습니다.', user: req.user });
};

module.exports = {
    publishToken
};