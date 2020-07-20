const got = require('got');
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config({
    path: __dirname + '/../.env'
});

const url = `http://localhost:${process.env.PORT}`

const test = {
    user: {
        get: async () => {
            const result = await got.get(`${url}/users/get/1`);
            const body = JSON.parse(result.body);

            console.log('get : ', body);
            assert.equal(body.id, 1);
            assert.equal(body.name, 'John');
        },
        getAll: async () => {
            const result = await got.get(`${url}/users/get`);
            const body = JSON.parse(result.body);

            console.log('get all : ', result.body);
            assert.equal(typeof body, typeof []);
        },
        post: async () => {
            const postData = {
                id: 10,
                name: 'new one'
            };

            const result = await got.post(`${url}/users/create`, {
                json: postData,
            })
            const body = JSON.parse(result.body);

            console.log('create : ', result.body);
            assert.equal(body.status, 'ok');
            assert.equal(body.id, 10);
        },
        patch: async () => {
            const postData = {
                name: 'new name new life'
            };

            const result = await got.patch(`${url}/users/update/10`, {
                json: postData,
            })
            const body = JSON.parse(result.body);

            console.log('update : ', body);
            assert.equal(body.status, 'ok');
            assert.equal(body.user.id, 10);
            assert.equal(body.user.name, postData.name);
        },
        delete: async () => {
            const postData = {
                name: 'new name new life'
            };

            const result = await got.delete(`${url}/users/delete/10`);
            const body = JSON.parse(result.body);

            console.log('delete : ', result.body);
            assert.equal(body.status, 'ok');
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
    await run(test.user.get);
    await run(test.user.getAll);
    await run(test.user.post);
    await run(test.user.patch);
    await run(test.user.delete);

    return 'ok';
};

userTest().then(console.log);
