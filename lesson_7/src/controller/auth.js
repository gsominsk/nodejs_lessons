const { throwErr } = require('./../helpers');

const auth = {
    logIn: async (data, { mongoDb }) => {
        const { login, password } = data;
        const { Users: userModel } = mongoDb;

        if (!login || !password) return throwErr(400, 'Check required fields.');

        // check user exists
        const user = await userModel.findOne({ login });
        if (!user) return throwErr(404, 'User not found.');

        // check password correct
        const isValid = await user.comparePassword(password.toString());
        if (!isValid) return throwErr(400, 'Password dont match.');

        // check password generate new token and update user in db
        const token = await user.generateToken();
        const userWithToken = await userModel.findOneAndUpdate({ _id: user._id }, { $set: { token } });

        return {
            status: 'ok',
            token: userWithToken.token,
        }
    },

    logOut: async (data, { mongoDb }) => {

    },
};

module.exports = auth;