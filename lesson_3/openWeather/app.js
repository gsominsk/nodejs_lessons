const { app } = require('./server');

app.listen(process.env.PORT, () => {
    console.log(`App configured on port : ${process.env.PORT}`);
});