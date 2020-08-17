const assert = require('assert').strict;
const supertest = require('supertest');

const server = require('./../../src/server');

describe('API tests: user', () => {

    describe('GET /users/get', () => {
        let agent;

        before(async () => {
            const app = await server();
            agent = supertest.agent(app);
        });

        it('When sending empty must return 200 ', async () => {
            const result = await agent.get(`/users/get`);
            const { body } = result;

            assert.equal(body.status, 'ok');
            assert.equal(typeof body.users, typeof []);
        });
    });

    describe('GET /users/get/:id', () => {
        let agent;
        let userId;

        before(async () => {
            const app = await server();
            agent = supertest.agent(app);

            const res = await agent.post('/users/create').send({
                login: 'abc_test_mocha', password: 123
            });

            userId = res.body.user._id;
        });

        after(async () => {
            await agent.delete(`/users/delete/${userId}`);
        });

        it('When sending id must return 200', async () => {
            const result = await agent.get(`/users/get/${userId}`);
            const { body } = result;

            assert.equal(body.status, 'ok');
            assert.equal(typeof body.user, 'object');
        });

        it('When sending invalid id must return 400', async () => {
            const result = await agent.get(`/users/get/aaaaaaaaaaaa`);
            const { body } = result;

            assert.equal(body.message, 'User not found');
        });

    });

    describe('POST /users/create', () => {
        let agent;
        let tempUserId;

        before(async () => {
            const app = await server();
            agent = supertest.agent(app);
        });

        after(async () => {
            await agent.delete(`/users/delete/${tempUserId}`);
        });

        it('When sending data must return 200 ', async () => {
            const result = await agent.post(`/users/create`).send({
                login: 'new_temp_user',
                password: 123,
            });
            const { body } = result;
            tempUserId = body.user._id;

            assert.equal(body.status, 'ok');
            assert.equal(typeof body.user, 'object');
        });

        it('When trying to create already created user data must return 400 ', async () => {
            const result = await agent.post(`/users/create`).send({
                login: 'new_temp_user',
                password: 123,
            });
            const { body } = result;

            assert.equal(body.message, 'User already exists');
        });

        it('When sending with missed params must return 400 ', async () => {
            const result = await agent.post(`/users/create`).send({
                login: 'new_temp_user',
            });
            const { body } = result;
            tempUserId = false;

            assert.equal(body.message, 'API error: missed required field');
        });

        it('When sending empty data must return 200 ', async () => {
            const result = await agent.post(`/users/create`).send();
            const { body } = result;
            tempUserId = false;

            assert.equal(body.message, 'API error: missed required field');
        });
    });
});
