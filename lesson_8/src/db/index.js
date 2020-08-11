const mongoose = require('mongoose');
const schemas = require('./models');
const { throwErr } = require('./../helpers');

const setupMongoDb = async () => {
    const {
        MONGO_DB_DATABASE,
        MONGO_DB_URL,
    } = process.env;

    const connection = await mongoose.connect(MONGO_DB_URL + MONGO_DB_DATABASE, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    });

    if (connection) console.log('Connection to db successful');
    else throwErr(500, 'Connection to db failed');

    return schemas;
}

module.exports = {
    setupMongoDb,
};