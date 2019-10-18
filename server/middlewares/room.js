const ROOM = require('../models').ROOM;

const getAllRooms = async (req, res) => {
    const rooms = await ROOM.getAllRooms();
    if (!rooms) return res.send({ status: 'FAIL', message: '전체 데이터를 조회하는데 실패했습니다.' });
    res.send({ status: 'SUCCESS', message: '전체 데이터를 조회하는데 성공했습니다.', data: rooms });
};

const getRoomsByOption = async (req, res) => {
    const rooms = await ROOM.getRoomsByOption(req.query);
    if (!rooms) return res.send({ status: 'FAIL', message: '조건에 맞는 데이터를 조회하는데 실패했습니다.' });
    res.send({ status: 'SUCCESS', message: '조건에 맞는 데이터를 조회하는데 성공했습니다.', data: rooms });
};

module.exports = {
    getAllRooms,
    getRoomsByOption
};