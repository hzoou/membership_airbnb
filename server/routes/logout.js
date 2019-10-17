module.exports = (req, res) => {
    res.clearCookie('jwt').send({msg: '로그아웃 완료 '});
};