const express = require('express');
const router = express.Router();

const { loginAuth, loginCompleteAuth } = require('../middlewares/authenticate');
const { publishToken } = require('../middlewares/user');

router.get('/', loginAuth);
router.get('/complete', loginCompleteAuth, publishToken);

module.exports = router;