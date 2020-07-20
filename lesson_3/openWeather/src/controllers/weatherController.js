const request = require('./../services/httpClient/index');

// const fetch = require('node-fetch');
// const bluebird = require('bluebird');
// fetch.Promise = bluebird;


const REQUIRED_FIELDS = ['city'];

const isUndefined = value => value === undefined;

const checkRequiredFields = (obj, fields) => {
    fields.map((key) => {
        if (isUndefined(obj[key])) throw ({message: 'params are not all '});
    });
}

const weatherController = async params => {
    checkRequiredFields(params, REQUIRED_FIELDS);

    const { city } = params;
    const url = `${process.env.OPEN_WEATHER_BASE_URL}/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`

    return request.get(url);
};

module.exports = weatherController;

