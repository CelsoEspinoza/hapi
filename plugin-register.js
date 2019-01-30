'use strict';

const postPublicPlugin = require('./services/post-public/post-public-plugin');
const postAuthPlugin = require('./services/post-auth/post-auth-plugin');

const plugins = [
    postPublicPlugin,
    postAuthPlugin,
];

module.exports = plugins;
