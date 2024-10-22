'use strict';

/**
 * action-operator service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::action-operator.action-operator');
