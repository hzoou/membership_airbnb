const express = require('express');
const router = express.Router();

const loginRouter = require('./login');
const logoutRouter = require('./logout');
const roomRouter = require('./room');

router.use('/login', loginRouter);
router.get('/logout', logoutRouter);
router.use('/rooms', roomRouter);

module.exports = router;