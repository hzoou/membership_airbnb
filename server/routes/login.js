const express = require('express');
const router = express.Router();

const { loginAuth, loginCompleteAuth } = require('../middlewares/authenticate');
const { loginComplete } = require('../middlewares/user');

router.get('/', loginAuth);

router.get('/complete', loginCompleteAuth, loginComplete);

module.exports = router;