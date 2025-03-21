/* eslint-disable no-undef */
/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXTAUTH_URL || 'https://green-world-shop.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  generateIndexSitemap: true,
  exclude: ['/dashboard', '/cart', '/login', '/register'],
};
