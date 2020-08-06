const { throwErr } = require('./../helpers');

const auth = {
    logIn: async (data, { mongoDb }) => {
        const { login, password } = data;
        const { Users: userModel } = mongoDb;

        if (!login || !password) return throwErr(400, 'Check required fields.');

        const user = await userModel.findOne({ login });

        if (!user) return throwErr(404, 'User not found.');

        const isValid = await user.comparePassword(password.toString());

        if (!isValid) return throwErr(400, 'Password dont match.');

        return {
            status: 'ok',
        }
    },

    logOut: async (data, { mongoDb }) => {

    },
};

module.exports = auth;