const ROOM = require('../models').ROOM;

const getAllRooms = async (req, res) => {
    const rooms = await ROOM.getAllRooms();
    res.send({ status: 'SUCCESS', data: rooms });
};

module.exports = {
    getAllRooms,
};