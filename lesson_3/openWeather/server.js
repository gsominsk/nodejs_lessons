const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
// const cors = require('cors');

const { weatherRouter } = require('./src/routes');

dotenv.config();

const app = express();

app.use(bodyParser.json());
// app.use(cors());

const ownCors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Method", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
}

app.use(ownCors);

app.use('/weather', weatherRouter);

app.use((req, res, next) => {
    res.status(404).send("Not Found")
});

module.exports = { app }