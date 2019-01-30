'use strict';

const postPluginRoute = require('./post-public.route');

function register(server) {
    server.route(postPluginRoute);
}

const plugin = {
	name: 'post-public',
	register,
	version: '1.0.0',
};

module.exports = plugin;