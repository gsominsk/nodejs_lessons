const request = require('./../services/httpClient');

const WEATHER_REQUIRED_FIELDS = ['city'];

const isUndefined = (value) => value === undefined;

const checkRequiredFields = (obj, fields) => {

    fields.map(key => {
        if (isUndefined(obj[key]))
            throw `Params are not all, check : ${ key }`;
    });

}

const weather = async params => {
    checkRequiredFields(params, WEATHER_REQUIRED_FIELDS);

    const { city } = params;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}`
    + `&appid=${process.env.OPEN_WEATHER_API_KEY}`;

    return request.get(url);
};

module.exports = {
    weather,
};