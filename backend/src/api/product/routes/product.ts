/**
 * product router
 */

import { factories } from '@strapi/strapi';

const defaultRouter = factories.createCoreRouter('api::product.product');

const createCustomRouter = (
	innerRouter,
	routeOverrides = [],
	additionalRoutes = []
) => {
	let cachedRoutes;

	return {
		get prefix() {
			return innerRouter.prefix;
		},
		get routes() {
			if (!cachedRoutes) cachedRoutes = innerRouter.routes;

			// Override existing routes with the custom ones
			const updatedRoutes = cachedRoutes.map((route) => {
				let overriddenRoute = false;

				routeOverrides.forEach((override) => {
					if (
						route.handler === override.handler &&
						route.method === override.method
					) {
						overriddenRoute = override;
					}
				});

				return overriddenRoute || route;
			});

			// Add any extra routes
			return updatedRoutes.concat(additionalRoutes);
		},
	};
};

// Define routes to override default behavior for the product API
const customRoutes = [
	{
		method: 'GET',
		path: '/products/:slug',
		handler: 'api::product.product.findOne',
	},
];

// Define any additional custom routes (empty in this case)
const additionalRoutes = [];

// Export the customized router
module.exports = createCustomRouter(
	defaultRouter,
	customRoutes,
	additionalRoutes
);
