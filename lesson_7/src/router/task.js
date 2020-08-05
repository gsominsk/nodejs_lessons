const { Router }  = require('express');
const { makeCall } = require('../helpers');

const task = require('../controller/task')

const router = Router();

router.get('/get', (req, res) => makeCall(req, res, task.getAll));
router.get('/get/:id', (req, res) => makeCall(req, res, task.get));
router.post('/create/', (req, res) => makeCall(req, res, task.create));
router.patch('/update/:id', (req, res) => makeCall(req, res, task.update));
router.delete('/delete/:id', (req, res) => makeCall(req, res, task.delete));

module.exports = router;

