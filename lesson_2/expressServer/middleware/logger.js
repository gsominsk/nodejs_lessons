const logger = (req, res, next) => {
    console.log('request body : ', req.body);
    next();
}

module.exports = {
    logger
}