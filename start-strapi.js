// start-strapi.js
const { createStrapi } = require('@strapi/strapi');

process.on('unhandledRejection', (err) => {
    console.error('🔴 Unhandled Rejection:', err);
});

process.on('uncaughtException', (err) => {
    console.error('🔴 Uncaught Exception:', err);
});

(async () => {
    try {
        const app = await createStrapi();
        await app.start();
        console.log('✅ Strapi started successfully');
    } catch (err) {
        console.error('❌ Failed to start Strapi:', err);
    }
})();
