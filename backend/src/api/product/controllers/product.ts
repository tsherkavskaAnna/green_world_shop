/**
 * product controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::product.product', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    const productId = parseInt(id, 10);
    if (isNaN(productId)) {
      return ctx.badRequest('Invalid ID format');
    }

    
    const product = await strapi.db.query('api::product.product').findOne({
      where: { id: productId},
      populate: ['products'], 
    });

    if (!product) {
      return ctx.notFound('Product not found');
    }

   
    const sanitizedEntity = await this.sanitizeOutput(product, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
