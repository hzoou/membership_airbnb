const express = require('express');
const router = express.Router();

const { getAllRooms } = require('../middlewares/room');

router.get('/', getAllRooms);

module.exports = router;