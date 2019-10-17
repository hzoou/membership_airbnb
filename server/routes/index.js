const express = require('express');
const router = express.Router();

const loginRouter = require('./login');
const logoutRouter = require('./logout');
const roomRouter = require('./room');
const reservationRouter = require('./reservation');

const { checkToken } = require('../middlewares/auth');

router.use('/login', loginRouter);
router.get('/logout', logoutRouter);
router.use('/rooms', roomRouter);
router.use(checkToken);
router.use('/reservation', reservationRouter);

module.exports = router;