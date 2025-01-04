module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors', 
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000'], // frontend
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
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
