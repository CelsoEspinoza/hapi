module.exports = {
    name: 'ApiRoutes',
    register: async (server, options) => {
        server.route([
            {
                method: 'POST',
                path: '/',
                options: {
                    // Servicio público
                    auth: false,
                    payload: {
                        
                    }
                },
                handler: async (req, res) => {
                    return 'Ruta GET';
                }
            }
        ]);
    }
}