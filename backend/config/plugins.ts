module.exports = ({ env }) => ({
	upload: {
		config: {
			provider: 'cloudinary',
			providerOptions: {
				cloud_name: env('CLOUDINARY_NAME'),
				api_key: env('CLOUDINARY_KEY'),
				api_secret: env('CLOUDINARY_SECRET'),
			},
			actionOptions: {
				upload: {},
				uploadStream: {},
				delete: {},
			},
		},
	},
	'user-permissions': {
		config: {
			cors: {
				enabled: true,
				headers: '*',
				origin: ['https://green-world-shop.vercel.app'],
			},
		},
	},
});
