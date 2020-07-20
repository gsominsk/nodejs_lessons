const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const { user } = require('./router');

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use('/users', user);

module.exports = app;