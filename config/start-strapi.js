// @ts-ignore
const strapi = require('@strapi/strapi');

process.on('unhandledRejection', (err) => {
    console.error('🔴 Unhandled Rejection:', err);
});

process.on('uncaughtException', (err) => {
    console.error('🔴 Uncaught Exception:', err);
});

(async () => {
    try {
        const app = await strapi().load(); // ✅ works fine at runtime
        await app.start();
    } catch (err) {
        console.error('❌ Failed to start Strapi:', err);
    }
})();
