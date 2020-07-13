const about = (request, response) => {
    response.send('About');
};

const home = (request, response) => {
    response.send('Home page');
};

module.exports = {
    about,
    home,
};