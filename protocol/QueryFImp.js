"use strict";

const TarsStream = require("@tars/stream");
const TarsError = require("@tars/rpc").error;
const registry = require('@tars/registry');

const registryProxy = require("./QueryF.js").registryProxy;
module.exports.registryProxy = registryProxy;

registryProxy.QueryFImp.prototype.initialize = function () {};
registry.setLocator("tars.tarsregistry.QueryObj@tcp -h 39.99.162.213 -p 17890");

registryProxy.QueryFImp.prototype.findObjectById = async function (current, id) {
  const result = await registry.findObjectById(id)
  const data = result.response.return.value;

  return current.sendResponse(data);
};