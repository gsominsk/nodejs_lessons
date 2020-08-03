const logger = async (req, res, next) => {
    const { logsCollection } = req.mongoDb;
    const { method } = req;

    logsCollection.insertOne({
        url: req.url,
        headers: req.headers,
        date: new Date(),
        method,
        params: method === 'GET' ? req.query : req.body || {},
    });

    next();
};

module.exports = logger;