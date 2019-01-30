'use strict';

const postAuthRoute = require('./post-auth.route');

function register(server) {
    server.route(postAuthRoute);
}

const plugin = {
    name: 'post-auth',
    register,
    version: '1.0.0',
};

module.exports = plugin;
