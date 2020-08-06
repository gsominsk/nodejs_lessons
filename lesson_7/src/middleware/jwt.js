const jwtMiddleware = async (req, res, next) => {
    const { method, query, body, mongoDb } = req;
    const { token } = method === 'GET' ? query : body;

    if (!token) return res.status(400).send('Token verification error: check token');

    const { Users: userModel } = mongoDb;

    const user = await userModel.findOne({ token });

    if (!user) return res.status(400).send('Token verification error: user not found');
    if (!user.isValidToken(token)) return res.status(400).send('Token verification error: token is not valid');

    next();
};

module.exports = { jwtMiddleware };