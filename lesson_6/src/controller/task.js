const { throwErr } = require('../helpers');

const task = {
    get: async (data, { mongoDb }) => {
        const { Tasks: taskModel } = mongoDb;
        const { id } = data.params;

        const task = await taskModel.findOne({ id: parseInt(id, 10) });

        if (!user) throwErr(400, 'User not found');

        return user;
    },

    getAll: async (_, { mongoDb }) => {
        const { Tasks: taskModel } = mongoDb;
        const tasks = await taskModel.find();
        return {
            status: 'ok',
            tasks
        };
    },

    create: async (data, { mongoDb }) => {
        const {
            Tasks: taskModel,
            Users: userModel,
        } = mongoDb;
        const { userId, title, message } = data;

        const user = await userModel.findById(userId);

        console.log({ user });

        const task = await taskModel.create({
            title,
            message,
            userId: userId._id
        });

        return ({
            status: 'ok',
            task,
        });
    },

    update: async (data, { mongoDb }) => {
        const { Tasks: taskModel } = mongoDb;
        const { title, message } = data;
        const id = parseInt(data.params.id);

        await taskModel.findOneAndUpdate({ id }, { name, age });

        return ({ status: 'ok' });
    },

    delete: async (data, { mongoDb }) => {
        const { Tasks: taskModel } = mongoDb;
        const id = parseInt(data.params.id);

        await taskModel.deleteOne({ id });

        return ({
            status: 'ok',
            id,
        });
    }
};

module.exports = task;