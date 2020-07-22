const { MongoClient } = require('mongodb');

const connectMongoDb = async () => {
    const {
        MONGO_DB_DATABASE,
        MONGO_DB_URL,
    } = process.env

    const connection = await MongoClient.connect(MONGO_DB_URL);
    const db = connection.db(MONGO_DB_DATABASE);

    const usersCollection = await db.collection('users');
    const logsCollection = await db.collection('logs');

    return {
        db,
        usersCollection,
        logsCollection
    };
}

module.exports = connectMongoDb;