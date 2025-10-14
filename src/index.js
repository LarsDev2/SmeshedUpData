export default {
  async bootstrap({ strapi }) {
    const db = strapi.db.connection;
    try {
      // Check if migration exists
      const result = await db.raw(
        "SELECT * FROM strapi_migrations WHERE name = '5.0.0-05-drop-slug-fields-index';"
      );

      // If not, mark it as completed so Strapi skips it
      if (result.rows.length === 0) {
        await db.raw(
          "INSERT INTO strapi_migrations (name, time) VALUES ('5.0.0-05-drop-slug-fields-index', NOW());"
        );
        strapi.log.info('✅ Skipped failing migration 5.0.0-05-drop-slug-fields-index');
      }
    } catch (err) {
      strapi.log.error('Error while skipping migration:', err);
    }
  },
};
