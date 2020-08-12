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

            console.log('GET /users/get/:id : ', body);
        },
        getAll: async () => {
            const result = await got.get(`${url}/users/get`);
            const body = JSON.parse(result.body);

            console.log('GET /users/get : ', body);
        },
        post: async () => {
            const postData = {
                id: 100,
                name: 'new one',
                email: 'newOne@gmail.com'
            };

            const result = await got.post(`${url}/users/create`, {
                json: postData,
            })
            const body = JSON.parse(result.body);
            console.log('POST /users/create : ', body);
        },
        patch: async () => {
            const postData = {
                name: 'new name new life',
                email: 'newOneWithNewLife@gmail.com'
            };

            const result = await got.patch(`${url}/users/update/100`, {
                json: postData,
            })
            const body = JSON.parse(result.body);

            console.log('PATCH /users/update/:id : ', body);
        },
        delete: async () => {
            const result = await got.delete(`${url}/users/delete/100`);
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
    // await run(test.user.get);
    await run(test.user.getAll);
    // await run(test.user.post);
    // await run(test.user.patch);
    // await run(test.user.delete);

    return 'ok';
};

userTest().then(console.log);
