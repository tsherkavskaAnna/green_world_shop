/**
 * product controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
	'api::product.product',
	({ strapi }) => ({
		async findOne(ctx) {
			const { slug } = ctx.params;

			const query = {
				filters: { slug: { $eq: slug } },
				...ctx.query,
			};

			const product = await strapi.entityService.findMany(
				'api::product.product',
				query
			);
			if (!product || product.length === 0) {
				return ctx.notFound('Product not found');
			}
			const sanitizedEntity = await this.sanitizeOutput(product, ctx);
			return this.transformResponse(sanitizedEntity);
		},
	})
);
