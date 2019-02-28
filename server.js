'use strict';

const Hapi = require('hapi');
const Joi = require('joi');
const validateToken = require('./authentication-token');
const AuthBearer = require('hapi-auth-bearer-token');

async function initServer() {
	// Los parámetros port y host son obligatorios.
	// 'app' se usa si deseas añadir configuración adicional, se puede omitir.
	const options = {
		port: 4000,
		host: 'localhost',
		routes: {
			cors: {
				origin: ['*'],
			},
		},
		app: {},
	};
	// Server configurado.
	const server = Hapi.server(options);

	// Configura la autheticación
	await server.register(AuthBearer);
	server.auth.strategy('token', 'bearer-access-token', {
		validate: validateToken,
	});

	// Agregando servicios.
	server.route({
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
		handler: function (request, h) {
			return request.payload;
		}
	});

	server.route({
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
		handler: function (request, h) {
			return request.payload;
		}
	});

	// Corre el servidor.
	await server.start();
	console.log(`Server is running at ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

initServer();