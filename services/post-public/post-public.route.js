'use strict';

const Joi = require('joi');
const handler = require('./post-public.handler');

const route = {
    handler,
    method: 'POST',
    options: {
        auth: false,
        validate: {
            payload: {
                number: Joi.number().integer().required(),
            },
        },
    },
    path: '/post-public',
};

module.exports = route;
