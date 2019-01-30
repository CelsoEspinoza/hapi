'use strict';

const Joi = require('joi');
const handler = require('./post-auth.handler');

const route = {
	handler,
	method: 'POST',
	options: {
		auth: 'token',
		validate: {
			payload: {
				text: Joi.string().required(),
			},
		},
	},
	path: '/post-auth',
};

module.exports = route;
