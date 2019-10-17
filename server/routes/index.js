const express = require('express');
const router = express.Router();

const loginRouter = require('./login');
const logoutRouter = require('./logout');

router.use('/login', loginRouter);
router.get('/logout', logoutRouter);

module.exports = router;