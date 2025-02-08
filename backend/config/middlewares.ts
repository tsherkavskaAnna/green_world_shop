module.exports = ({ env }) => [
	'strapi::errors',
	{
		name: 'strapi::cors',
		config: {
			origin: ['http://localhost:3000'], // Dominio del frontend
			methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
			headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
			credentials: true,
		},
	},
	{
		name: 'strapi::security',
		config: {
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
	},
	'strapi::poweredBy',
	'strapi::logger',
	'strapi::query',
	'strapi::body',
	'strapi::session',
	'strapi::favicon',
	'strapi::public',
];
