const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const { homeRouter, userRouter } = require('./routes');
const { logger } = require('./middleware');

dotenv.config();

const app = express();

app.use(logger);
app.use(morgan('tiny'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/home', homeRouter);
app.use('/users', userRouter);
app.use('/static', express.static(__dirname + '/public'))
app.use('/static/images', express.static(__dirname + '/public/images'))

app.use((req, res, next) => {
    res.status(404).send("Not Found")
});

module.exports = { app }