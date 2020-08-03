const { throwErr } = require('../helpers');

const user = {
    get: async (data, { mongoDb }) => {
        const { usersCollection } = mongoDb;
        const { id } = data.params;

        const user = await usersCollection.findOne({ id: parseInt(id, 10) });

        if (!user) throwErr(400, 'User not found');

        return user;
    },

    getAll: async (_, { mongoDb }) => {
        const { usersCollection } = mongoDb;
        const users = await usersCollection.find().toArray();
        return {
            status: 'ok',
            users
        };
    },

    create: async (data, { mongoDb }) => {
        const { usersCollection } = mongoDb;
        await usersCollection.insertOne(data);

        return ({
            status: 'ok',
        });
    },

    update: async (data, { mongoDb }) => {
        const { usersCollection } = mongoDb;
        const { name, email } = data;
        const id = parseInt(data.params.id);

        await usersCollection.updateOne({ id }, {
            $set: {
                name,
                email
            }
        });

        return ({ status: 'ok' });
    },

    delete: async (data, { mongoDb }) => {
        const { usersCollection } = mongoDb;
        const id = parseInt(data.params.id);

        usersCollection.deleteOne({ id });

        return ({
            status: 'ok',
            id,
        });
    }
};

module.exports = user;