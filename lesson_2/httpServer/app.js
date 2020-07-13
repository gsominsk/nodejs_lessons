const { server } = require('./server');

server.listen(process.env.PORT, () => {
  console.log(`server listen on port : ${process.env.PORT}`)
});

server.on('error', err => {
  console.log(err);
});
