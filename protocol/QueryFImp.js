"use strict";

/**
 * @file Tars 注册代理服务实现
 * @module protocol/QueryFImp
 */

const TarsStream = require("@tars/stream");
const registry = require('@tars/registry');
const { SERVICE, DOMAIN, PORT, REPORT_DOMAIN } = require('../config/index');

const registryProxy = require("./QueryF.js").registryProxy;
module.exports.registryProxy = registryProxy;

registryProxy.QueryFImp.prototype.initialize = function () {};
registry.setLocator(`${SERVICE} -h ${DOMAIN} -p ${PORT}`);

registryProxy.QueryFImp.prototype.findObjectById = async function (current, id) {
  const result = await registry.findObjectById(id)
  const data = result.response.return.value;

  const list = TarsStream.List(registryProxy.EndpointF);

  data.forEach(item => {
    item.host = REPORT_DOMAIN;
    list.push(item);
  });

  return current.sendResponse(list);
};