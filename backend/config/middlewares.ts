module.exports = ({ env }) => [
	'strapi::errors',
	{
		name: 'strapi::cors',
		config: {
			headers: [
				'Content-Type',
				'Authorization',
				'Access-Control-Allow-Origin',
				'Access-Control-Allow-Credentials',
			],
			origin: ['http://localhost:3000', 'http://127.0.0.1:1337'], // Dominio del frontend
			methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'],
			credentials: true,
		},
	},
	{
		name: 'strapi::security',
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					'connect-src': ["'self'", 'https:'],
					'img-src': [
						"'self'",
						'data:',
						'blob:',
						'res.cloudinary.com',
					],
					'media-src': [
						"'self'",
						'data:',
						'blob:',
						'res.cloudinary.com',
					],
					upgradeInsecureRequests: null,
				},
			},
		},
	},
	'strapi::poweredBy',
	'strapi::logger',
	'strapi::query',
	'strapi::body',
	'strapi::session',
	'strapi::favicon',
	'strapi::public',
];
