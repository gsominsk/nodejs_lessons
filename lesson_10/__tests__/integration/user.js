const got = require('got');
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config({
    path: __dirname + './../../.env'
});

const url = `http://localhost:${process.env.PORT}`

const test = {
    user: {
        get: ({ id }) => async () => {
            const result = await got.get(`${url}/users/get/${id}`);
            const body = JSON.parse(result.body);

            console.log('GET /users/get/:id : ', body);
        },
        getAll: async () => {
            const result = await got.get(`${url}/users/get`);
            const body = JSON.parse(result.body);

            console.log('GET /users/get : ', body);
        },
        post: (postData) => async () => {
            const result = await got.post(`${url}/users/create`, {
                json: postData,
            })
            const body = JSON.parse(result.body);
            console.log('POST /users/create : ', body);
            return body;
        },
        patch: () => (postData) => async () => {
            const { id, toUpdate } = postData;
            const result = await got.patch(`${url}/users/update/100`, {
                json: postData,
            })
            const body = JSON.parse(result.body);

            console.log('PATCH /users/update/:id : ', body);
        },
        delete: ({ id }) => async () => {
            const result = await got.delete(`${url}/users/delete/${id}`);
            const body = JSON.parse(result.body);

            console.log('DELETE /users/delete/:id : ', body);
        },
    },
}

const run = test => {
    try {
        return test();
    } catch (err) {
        console.log(err);
    }
};

const userTest = async () => {
    await run(test.user.getAll);

    const { user } = await run(test.user.post({
        login: 'abc_2',
        password: '123'
    }));

    await run(test.user.get({ id: user._id }));

    await run(test.user.patch({
        id: user._id,
        toUpdate: {
            password: '321'
        },
    }));

    await run(test.user.delete({ id: user._id }));

    return 'ok';
};

userTest().then(console.log);
