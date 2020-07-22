const connectMongoDb = require('./../mongoClient')

const logger = async (req, res, next) => {
    const { logsCollection } = await connectMongoDb();
    const { method } = req;

    logsCollection.insertOne({
        url: req.url,
        headers: req.headers,
        method,
        params: method === 'GET' ? req.query : req.body || {},
    });

    next();
};

module.exports = logger;