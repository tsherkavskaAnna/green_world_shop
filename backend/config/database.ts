module.exports = ({ env }) => ({
	connection: {
		client: env('DATABASE_CLIENT', 'postgres'),
		connection: {
			host: env('DATABASE_HOST', 'postgres'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'cms_green_world'),
			user: env('DATABASE_USERNAME', 'main_user'),
			password: env('DATABASE_PASSWORD', '12071957'),
			ssl: env.bool('DATABASE_SSL', false),
		},
	},
});
