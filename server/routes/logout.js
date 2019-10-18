module.exports = (req, res) => {
    try {
        res.clearCookie('jwt');
        res.send({ status: 'SUCCESS', message: '로그아웃이 완료되었습니다.' });
    } catch (e) {
        res.send({ status: 'FAIL', message: '로그아웃에 실패하였습니다.' });
    }
};