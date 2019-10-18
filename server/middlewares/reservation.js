const RESERVATION = require('../moderls').RESERVATION;

const reserveRoom = async (req, res) => {
    const user_id = req.user.id;
    const { room_id, checkin, checkout } = req.body;
    const result = await RESERVATION.reserveRoom(user_id, room_id, checkin, checkout);
    if (result) return res.send({ status: 'SUCCESS', message: '예약이 완료되었습니다.' });
    res.send({ status: 'FAIL', message: '예약에 실패하였습니다.' });
};

const cancelRoom = async (req, res) => {
    const user_id = req.user.id;
    const { room_id, checkin, checkout } = req.body;
    const result = await RESERVATION.cancelRoom(user_id, room_id, checkin, checkout);
    if (result) return res.send({ status: 'SUCCESS', message: '예약취소가 완료되었습니다.' });
    res.send({ status: 'FAIL', message: '예약취소에 실패하였습니다.' });
};

module.exports = {
    reserveRoom,
    cancelRoom
};