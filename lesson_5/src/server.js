const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const { user } = require('./router');
const logger = require('./services/logger');

dotenv.config({ path: __dirname + '/../.env' });

const app = express();

app.use(bodyParser.json());
app.use(logger);

app.use('/users', user);

module.exports = app;