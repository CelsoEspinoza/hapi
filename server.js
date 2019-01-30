'use strict';

const Hapi = require('hapi');
const validateToken = require('./authentication-token');
const plugins = require('./plugin-register');
const AuthBearer = require('hapi-auth-bearer-token');

async function initServer() {
	// Los parámetros post y host son obligatorios.
	// 'app' se usa si deseas añadir configuración adicional, se puede omitir.
	const options = {
		port: 4000,
		host: 'localhost',
		app: {},
	};
	// Server configurado.
	const server = Hapi.server(options);
	// Registra todos las rutas
	await server.register([
		...plugins,
		{
			// Registering Bearer authentication
			plugin: AuthBearer,
		}
	]);
	server.auth.strategy('token', 'bearer-access-token', {
		validateFunction: validateToken,
	});

	// Corre el servidor.
	await server.start();
	console.log(`Server is running in: ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

initServer();