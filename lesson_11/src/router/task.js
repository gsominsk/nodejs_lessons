const { Router }  = require('express');
const { makeCall } = require('../helpers');

const task = require('../controller/task')

const router = Router();

router.get('/get', (req, res) => makeCall(req, res, task.getAll));
router.post('/create/', (req, res) => makeCall(req, res, task.create));

module.exports = router;

