const { throwErr } = require('../helpers');

const user = {
    get: async (data, { mongoDb }) => {
        const { Users: usersCollection } = mongoDb;
        const { id } = data.params;

        const user = await usersCollection.findOne({ id: parseInt(id, 10) });

        if (!user) throwErr(400, 'User not found');

        return user;
    },

    getAll: async (_, { mongoDb }) => {
        const { Users: usersCollection } = mongoDb;
        const users = await usersCollection.find();
        return {
            status: 'ok',
            users
        };
    },

    create: async (data, { mongoDb }) => {
        const { Users: usersCollection } = mongoDb;
        await usersCollection.create(data);

        return ({
            status: 'ok',
        });
    },

    update: async (data, { mongoDb }) => {
        const { Users: usersCollection } = mongoDb;
        const { name, age } = data;
        const id = parseInt(data.params.id);

        await usersCollection.findOneAndUpdate({ id }, { name, age });

        return ({ status: 'ok' });
    },

    delete: async (data, { mongoDb }) => {
        const { Users: usersCollection } = mongoDb;
        const id = parseInt(data.params.id);

        await usersCollection.deleteOne({ id });

        return ({
            status: 'ok',
            id,
        });
    }
};

module.exports = user;