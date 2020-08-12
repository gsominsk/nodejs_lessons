const logger = async (req, res, next) => {
    const { Logs: logsCollection } = req.mongoDb;
    const { method } = req;

    await logsCollection.create({
        url: req.url,
        headers: req.headers,
        date: new Date(),
        method,
        params: method === 'GET' ? req.query : req.body || {},
    });

    next();
};

module.exports = logger;