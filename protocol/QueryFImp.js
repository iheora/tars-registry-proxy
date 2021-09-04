"use strict";

/**
 * @file Tars 注册代理服务实现
 * @module protocol/QueryFImp
 */

const TarsStream = require("@tars/stream");
const registry = require('@tars/registry');
const registryProxy = require("./QueryF.js").registryProxy;

const { SERVICE, DOMAIN, PORT, REPORT_DOMAIN } = require('../config/index');

registryProxy.QueryFImp.prototype.initialize = function () {};
registry.setLocator(`${SERVICE} -h ${DOMAIN} -p ${PORT}`);

// 根据 id 获取对象
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

// 根据 id 获取对象同组 endpoint 列表
registryProxy.QueryFImp.prototype.findObjectByIdInSameGroup = async function (current, id, activeEp, inactiveEp) {
  const result = await registry.findObjectByIdInSameGroup(id);
  const data = result.response.arguments;

  data.activeEp.value = data.activeEp.value.map(item => {
    item.host = REPORT_DOMAIN;
    return item;
  });

  current.sendResponse(0, data.activeEp, data.inactiveEp);
};

module.exports.registryProxy = registryProxy;