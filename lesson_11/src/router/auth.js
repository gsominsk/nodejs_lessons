const { Router }  = require('express');
const { makeCall } = require('../helpers');

const auth = require('../controller/auth');

const router = Router();

router.post('/login', (req, res) => makeCall(req, res, auth.logIn));
router.post('/logout', (req, res) => makeCall(req, res, auth.logOut));

module.exports = router;

