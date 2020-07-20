const { Router } = require('express')

const weatherController = require('./../controllers/weatherController');

const weatherRouter = Router();

const call = async (func, body, res) => {
    try {
        const result = await func(body);
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }

}

weatherRouter.get("/", async (req, res, next) => {
    const body = req.query;
    await call(weatherController, body, res);
});

module.exports = weatherRouter;