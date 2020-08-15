const assert = require('assert').strict;
const dotenv = require('dotenv');
const supertest = require('supertest');
const got = require('got');

const { server } = require('./../../src/server');

dotenv.config({
    path: __dirname + './../../.env'
});

const port = process.env.PORT || 3000;
const host = 'localhost';
const url = `http://${host}:${port}`;

describe('API tests: user', () => {
    const app = supertest.agent(server);

    describe('GET /users/get', () => {
        it('When sending empty must return 200 ', async () => {

            const result = await app.get(`${url}/users/get`);
            const body = JSON.parse(result.body);

            assert.equal(body.status, 'ok');
            assert.equal(typeof body.users, typeof []);
        });
    });

    describe.skip('GET /users/get/:id', () => {
        it('When sending empty must return 200 ', async () => {

            const result = await app.get(`${url}/users/get/${id}`);
            const body = JSON.parse(result.body);

            assert.equal(body.status, 'ok');
            assert.equal(typeof body.users, typeof []);
        });
    });
});