const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const { user, task, auth } = require('./router');
const logger = require('./services/logger');
const { upload } = require('./services/multer');
const file = require('./controller/file');
const { setupMongoDb } = require('./db');

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
    app.use('/static', express.static(__dirname + '/static'));

    console.log({ static: __dirname + '/static'})

    app.use('/users', user);
    app.use('/tasks', task);
    app.use('/auth', auth);
    app.post('/upload', upload.single('filedata'), file.upload);

    app.listen(port, callback);
};

module.exports = server;