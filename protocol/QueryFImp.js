"use strict";

const TarsStream = require("@tars/stream");
const TarsError = require("@tars/rpc").error;
const registry = require('@tars/registry');

const tars = require("./QueryF.js").tars;
module.exports.tars = tars;

registry.setLocator("tars.tarsregistry.QueryObj@tcp -h 39.99.162.213 -p 17890");

tars.QueryFImp.prototype.initialize = function () {};

tars.QueryFImp.prototype.findObjectById = function (current, id) {
  return registry.findObjectById(current, id);
};