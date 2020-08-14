const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config({ path: __dirname + '/../.env' });

const { user, task, auth } = require('./router');
const logger = require('./services/logger');
const { upload } = require('./services/multer');
const file = require('./controller/file');
const { setupMongoDb } = require('./db');

const server = async (port, callback) => {
    const app = express();
    const mongoDb = await setupMongoDb();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use((req, _, next) => {
        req.mongoDb = mongoDb;
        next();
    });
    app.use(logger);
    app.use('/static', express.static(__dirname + '/static'));

    app.use('/users', user);
    app.use('/tasks', task);
    app.use('/auth', auth);
    app.post('/upload', upload.single('filedata'), file.uploadCloud);
    app.post('/upload/many', upload.any(), file.uploadCloudMany);

    app.listen(port, callback);
};

module.exports = server;