const makeCall = async (req, res, func) => {
    try {
        const data = req.method === 'GET' ? req.query : req.body;
        const ctx = {
            mongoDb: req.mongoDb,
        };
        data.params = req.params || {};
        const result = await func(data, ctx);
        res.send(result);
    } catch (error) {
        const {
            status = 500,
            message = 'Bad request'
        } = error;

        res.status(status);
        res.send({ message });
    }
}

const isEqual = (firstValue, secondValue) => firstValue === secondValue;

const throwErr = (status, message) => {
    throw ({ status, message });
};

module.exports = {
    makeCall,
    isEqual,
    throwErr,
}
