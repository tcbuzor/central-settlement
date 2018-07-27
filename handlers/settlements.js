'use strict';

const Boom = require('boom');

/**
 * Operations on /settlements
 */
module.exports = {
    /**
     * summary: Returns Settlement(s) as per parameter(s).
     * description: 
     * parameters: id, settlementWindowId, ledgerId, state, fromDateTime, toDateTime
     * produces: application/json
     * responses: 200, 400, 401, 404, 415, default
     */
    get: function getSettlementsByParams(request, h) {
        return Boom.notImplemented();
    }
};
