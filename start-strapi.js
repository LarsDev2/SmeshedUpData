const { createStrapi } = require('@strapi/strapi');

(async () => {
    try {
        const strapi = await createStrapi({
            serveAdminPanel: true,
        });

        await strapi.start();
        console.log('✅ Strapi started successfully!');
    } catch (err) {
        console.error('❌ Failed to start Strapi:', err);
        process.exit(1);
    }
})();
