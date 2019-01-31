'use strict';

const validateToken = require('./authentication-token');

function register(server) {
	server.auth.strategy('token', 'bearer-access-token', {
		validate: validateToken,
	});
}

const plugin = {
	name: 'authenticate-token',
	register,
	version: '1.0.0',
};

module.exports = plugin;
