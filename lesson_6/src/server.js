const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const { user } = require('./router');
const logger = require('./services/logger');
const { setupMongoDb } = require('./services/mongoClient');

dotenv.config({ path: __dirname + '/../.env' });

const server = async (port, callback) => {
    const app = express();
    const mongoDb = await setupMongoDb();

    app.use(bodyParser.json());
    app.use((req, _, next) => {
        req.mongoDb = mongoDb;
        next();
    });
    app.use(logger);

    app.use('/users', user);

    app.listen(port, callback);
};

module.exports = server;