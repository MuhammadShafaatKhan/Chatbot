module.exports = () => ({
    "entity-relationship-chart": {
        enabled: true,
        config: {
          // By default all contentTypes and components are included.
          // To exlclude strapi's internal models, use:
          exclude: [
            "strapi::core-store",
            "webhook",
            "admin::permission",
            "admin::user",
            "admin::role",
            "admin::api-token",
            "admin::api-token-permission",
            "admin::transfer-token-permission",
            "admin::transfer-token",
            "plugin::upload.file",
            "plugin::i18n.locale",
            "plugin::users-permissions.permission",
            "plugin::users-permissions.role",
            "plugin::content-releases.release-action",
            "plugin::content-releases.release",
            "plugin::upload.folder"
          ],
        },
      },
});
