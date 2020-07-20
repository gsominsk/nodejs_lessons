const { Router }  = require('express');
const { makeCall } = require('../helpers');

const user = require('../controller/user')

const router = Router();

router.get('/get', (req, res) => makeCall(req, res, user.getAll));
router.get('/get/:id', (req, res) => makeCall(req, res, user.get));
router.post('/create/', (req, res) => makeCall(req, res, user.create));
router.patch('/update/:id', (req, res) => makeCall(req, res, user.update));
router.delete('/delete/:id', (req, res) => makeCall(req, res, user.delete));

module.exports = router;

