'use strict';

/**
 * action-source service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::action-source.action-source');
