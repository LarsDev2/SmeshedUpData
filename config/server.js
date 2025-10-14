process.on('unhandledRejection', (err) => {
  console.error('🔴 Unhandled Rejection:', err);
});
process.on('uncaughtException', (err) => {
  console.error('🔴 Uncaught Exception:', err);
});

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});