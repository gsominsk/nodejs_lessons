const { throwErr } = require('../helpers');
// const { sendMail } = require('./../services/sendGrid');
const { sendEmail } = require('./../services/nodemailer');

const user = {
    get: async (data, { mongoDb }) => {
        const { Users: usersModel } = mongoDb;
        const { id } = data.params;

        const user = await usersModel
            .findOne({ _id: id })
            .populate('tasks');

        if (!user) throwErr(400, 'User not found');

        return {
            status: 'ok',
            user
        };
    },

    getAll: async (_, { mongoDb }) => {
        const { Users: usersModel } = mongoDb;
        const users = await usersModel.find();
        return {
            status: 'ok',
            users
        };
    },

    create: async (data, { mongoDb }) => {
        const { Users: usersModel } = mongoDb;
        const { login, password, email } = data;

        if (!login || !password || !email) return throwErr(400, 'API error: missed required field');

        // const alreadyExists = await usersModel.findOne({ email });

        // if (alreadyExists) return throwErr(400, 'User already exists');

        const user = new usersModel(data);
        const created = await user.save();

        await sendEmail(email);

        return ({
            status: 'ok',
            user: created,
        });
    },

    update: async (data, { mongoDb }) => {
        const { Users: usersModel } = mongoDb;
        const { name, age } = data;
        const _id = data.params.id;

        await usersModel.findOneAndUpdate({ _id }, { name, age });

        return ({ status: 'ok' });
    },

    delete: async (data, { mongoDb }) => {
        const { Users: usersModel } = mongoDb;
        const _id = data.params.id;

        await usersModel.deleteOne({ _id });

        return ({
            status: 'ok',
            id: _id,
        });
    }
};

module.exports = user;
