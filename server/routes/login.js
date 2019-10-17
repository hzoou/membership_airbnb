const express = require('express');
const router = express.Router();

const { loginByGoogle, getGoogleProfile } = require('../middlewares/auth');
const { publishToken } = require('../middlewares/user');

router.get('/', loginByGoogle);
router.get('/complete', getGoogleProfile, publishToken);

module.exports = router;