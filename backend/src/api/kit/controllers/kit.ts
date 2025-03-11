/**
 * kit controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::kit.kit', ({ strapi }) => ({
	async findOne(ctx) {
		const { slug } = ctx.params;

		const query = {
			filters: { slug: { $eq: slug } },
			...ctx.query,
		};

		const product = await strapi.entityService.findMany(
			'api::kit.kit',
			query
		);
		if (!product || product.length === 0) {
			return ctx.notFound('Kit not found');
		}
		const sanitizedEntity = await this.sanitizeOutput(product, ctx);
		return this.transformResponse(sanitizedEntity);
	},
}));
