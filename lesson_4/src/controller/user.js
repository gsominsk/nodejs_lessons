const { isEqual, throwErr } = require('../helpers');

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Liam' },
    { id: 3, name: 'Noah' },
    { id: 4, name: 'James' },
    { id: 5, name: 'Lucas' },
];

const user = {
    get: (data) => {
        const { id } = data.params;
        const user = users.find(user => isEqual(user.id, parseInt(id, 10)));

        if (!user) throwErr(400, 'User not found');

        return user;
    },

    getAll: () => users,

    create: (data) => {
        const { id, name } = data;

        users.push({ id, name });

        return ({
            status: 'ok',
            id,
        });
    },

    update: (data) => {
        const { name } = data;
        const { id } = data.params;
        const userId = users.findIndex(user => isEqual(user.id, parseInt(id, 10)));

        users[userId].name = name;

        return ({
            status: 'ok',
            user: users[userId],
        });
    },

    delete: (data) => {
        const { id } = data.params;
        const userId = users.findIndex(user => isEqual(user.id, parseInt(id, 10)));

        users.splice(userId, 1);

        return ({
            status: 'ok',
            id,
        });
    }
};

module.exports = user;