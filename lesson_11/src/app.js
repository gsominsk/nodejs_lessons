const server = require('./server');

const { env: { PORT } } = process;

const log = (error) => {
    if (error) {
        console.log('Error on listen : ', error);
        process.exit(0);
    }
    console.log(`App configured on port : ${PORT}`);
};

(async () => {
    const app = await server();

    app.listen(PORT, log);
})();
