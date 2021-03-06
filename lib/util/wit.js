require('dotenv').config();
const apiKey = process.env.WIT_API_KEY;
const request = require('superagent');

const getIntent = query => {
    return `https://api.wit.ai/message?v=20180730&q=${query}`;
};

const get = url => {
    return request.get(url)
        .set('Authorization', 'Bearer ' + apiKey)
        .then(res => {
            const intent = JSON.parse(res.text);
            return intent.entities.intent;
        });
};

module.exports = function getWit(query) {
    return get(getIntent(query))
        .then(data => data);
};