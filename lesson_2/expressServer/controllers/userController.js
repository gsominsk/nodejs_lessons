const addUser = (request, response) => {
    const params = decodeURIComponent(request.body);

    console.log({ params, body: request.body });

    response.send('Adding new user');
};

const getUsers = (request, response) => {

    console.log('get user body : ', request.body)

    response.send('List o users');
};

module.exports = {
    addUser,
    getUsers,
};