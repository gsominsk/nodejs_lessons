/**
 * - https://nodejs.org/api/http.html
 */

const dotenv = require('dotenv');
const http = require('http');

const router = require('./router');

dotenv.config();

const requestListener = async (req, res) => {
  const call = await router[req.url];

  try {
    res.end(call());
  } catch (err) {
    res.write(500);
    res.end(err);
  }
};

const server = http.createServer(requestListener);

module.exports = {
  server,
};