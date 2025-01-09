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
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "connect-src": ["'self'", "https:"],
        "default-src": ["'self'"],
        "img-src": [
          "'self'",
          "data:",
          "blob:",
          "market-assets.strapi.io",
          env("SUPABASE_URL"),
        ],
        "media-src": [
          "'self'",
          "data:",
          "blob:",
          "market-assets.strapi.io",
          env("SUPABASE_URL"),
        ],
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
