const ROOM = require('../models').ROOM;

const getAllRooms = async (req, res) => {
    const rooms = await ROOM.getAllRooms();
    res.send({ status: 'SUCCESS', data: rooms });
};

const getRoomsByOption = async (req, res) => {
    const rooms = await ROOM.getRoomsByOption(req.query);
    res.send({ status: 'SUCCESS', data: rooms });
};

module.exports = {
    getAllRooms,
    getRoomsByOption
};