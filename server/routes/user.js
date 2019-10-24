const express = require('express');
const router = express.Router();

const { sendUserData } = require('../middlewares/user');

router.post('/', sendUserData);

module.exports = router;