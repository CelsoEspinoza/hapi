'use strict';

const HapiAxios = require('hapi-axios');
const authenticateToken = require('./plugin-auth-token');
const postPublicPlugin = require('./services/post-public/post-public-plugin');
const postAuthPlugin = require('./services/post-auth/post-auth-plugin');

const plugins = [
    authenticateToken,
    postPublicPlugin,
    postAuthPlugin,
    {
        plugin: HapiAxios,
        options: {
          instances: [
            {
              name: 'japisale',
              axios: {
                baseURL: 'https://admin.japisale.com',
              },
            },
          ],
        },
      }
];

module.exports = plugins;
