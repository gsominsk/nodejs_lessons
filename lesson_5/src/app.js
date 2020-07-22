const app = require('./server');

app.listen(process.env.PORT, err => {
    if (err) {
        console.log('Error on listen : ', err);
        process.exit(0);
    }

    console.log(`App configured on port : ${process.env.PORT}`);
});
