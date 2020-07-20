const makeCall = async (req, res, func) => {
    try {
        const data = req.method === 'GET' ? req.query : req.body;
        data.params = req.params || {};
        const result = await func(data);
        res.send(result);
    } catch (error) {
        console.log(error);
        
        const {
            status = 500,
            message = 'Bad request'
        } = error;

        res.status(status );
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