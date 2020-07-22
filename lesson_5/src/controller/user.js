const { isEqual, throwErr } = require('../helpers');
const connectMongoDb = require('./../services/mongoClient');

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Liam' },
    { id: 3, name: 'Noah' },
    { id: 4, name: 'James' },
    { id: 5, name: 'Lucas' },
];

const user = {
    get: async (data) => {
        const { usersCollection } = await connectMongoDb();
        const { id } = data.params;

        const user = await usersCollection.findOne({ id: parseInt(id, 10) });

        if (!user) throwErr(400, 'User not found');

        return user;
    },

    getAll: async () => {
        const { usersCollection } = await connectMongoDb();
        const users = await usersCollection.find().toArray();
        return {
            status: 'ok',
            users
        };
    },

    create: async (data) => {
        const { usersCollection } = await connectMongoDb();
        await usersCollection.insertOne(data);

        return ({
            status: 'ok',
        });
    },

    update: async (data) => {
        const { usersCollection } = await connectMongoDb();
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

    delete: async (data) => {
        const { usersCollection } = await connectMongoDb();
        const id = parseInt(data.params.id);

        usersCollection.deleteOne({ id });

        return ({
            status: 'ok',
            id,
        });
    }
};

module.exports = user;