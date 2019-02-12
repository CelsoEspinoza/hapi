'use strict';

const authenticateToken = require('./plugin-auth-token');
const postPublicPlugin = require('./services/post-public/post-public-plugin');
const postAuthPlugin = require('./services/post-auth/post-auth-plugin');

const plugins = [
    authenticateToken,
    postPublicPlugin,
    postAuthPlugin,
];

module.exports = plugins;
