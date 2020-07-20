const fetch = require('node-fetch');
const bluebird = require('bluebird');

fetch.Promise = bluebird;

const request = {
    get: (url, body) => fetch(url, { method: 'GET'}).then(res => res.json())
};

module.exports = request;
