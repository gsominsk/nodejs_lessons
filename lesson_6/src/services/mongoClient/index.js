const { MongoClient } = require('mongodb');

const setupMongoDb = async () => {
    const {
        MONGO_DB_DATABASE,
        MONGO_DB_URL,
    } = process.env;

    const connection = await MongoClient.connect(MONGO_DB_URL, { useUnifiedTopology: true } );
    const db = connection.db(MONGO_DB_DATABASE);
    console.log('Connected to db : ', !!connection && !!db);


    const usersCollection = await db.collection('users');
    const logsCollection = await db.collection('logs');

    return {
        db,
        usersCollection,
        logsCollection
    };
}

module.exports = {
    setupMongoDb,
};