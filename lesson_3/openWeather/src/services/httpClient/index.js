const fetch = require('node-fetch');
const bluebird = require('bluebird');

fetch.Promise = bluebird;

const request = {
    post: (url, body) => fetch(url, { method: 'post', body }).then(res => res.json()),
    get: (url) => fetch(url, { method: 'get' }).then(res => res.json())
}

module.exports = request;