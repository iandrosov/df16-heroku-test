'use strict';

var url = require('url');


var Accounts = require('./AccountsService');


module.exports.accountsGET = function accountsGET (req, res, next) {
  Accounts.accountsGET(req.swagger.params, res, next);
};
