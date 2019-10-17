const express = require('express');
const router = express.Router();

const passport = require('../middlewares/passport');

router.get('/login',
            passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
);

router.get('/login/redirect',
            passport.authenticate('google', { failureRedirect: '/login' }),
            (req, res) => { res.redirect('/') }
);

module.exports = router;