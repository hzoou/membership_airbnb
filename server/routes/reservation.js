const express = require('express');
const router = express.Router();

const { reserveRoom } = require('../middlewares/reservation');

router.post('/', reserveRoom);

module.exports = router;