module.exports = [
  'strapi::logger',
  'strapi::errors',
{
  name: 'strapi::cors',
  config: {
    origin: [
      'http://localhost:3000', 
      'https://music-player-frontend-eight-nu.vercel.app'
    ],
    credentials: true,
  },
},
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
