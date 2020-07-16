const { Router } = require("express");

const { weather } = require('../controllers/weatherController')

const weatherRouter = Router();

const call = async (func, params, res) => {
    try {
        const result = await func(params);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: JSON.stringify(error) });
    }
}

weatherRouter.get("/", (req, res) => {
    const params = req.query;
    call(weather, params, res);
});

module.exports = weatherRouter;
