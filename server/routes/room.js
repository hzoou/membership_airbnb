const express = require('express');
const router = express.Router();

const { getAllRooms, getRoomsByOption } = require('../middlewares/room');

router.get('/', getAllRooms);
router.get('/option', getRoomsByOption);

module.exports = router;