/**
 * - https://nodejs.org/api/http.html
 */

const dotenv = require('dotenv');
const http = require('http');

const router = require('./router/index');

dotenv.config();

const requestListener = async (req, res) => {
  const { url } = req;

  const call = await router[url];

  let result = '';

  try {
    result = call();
  } catch (err) {
    res.write(500);
    res.end(err);
  }

  res.end(result);
};

const server = http.createServer(requestListener);

module.exports = {
  server,
};