const express = require('express');
const router = express.Router();

const { reserveRoom, cancelRoom } = require('../middlewares/reservation');

router.post('/', reserveRoom);
router.delete('/', cancelRoom);

module.exports = router;