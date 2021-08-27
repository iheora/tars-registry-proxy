const tarsRpc = require('@tars/rpc');

const Test = require('./HelloProxy');

const registry = require('@tars/registry');

registry.setLocator("tars.tarsregistry.QueryObj@tcp -h 39.99.162.213 -p 17890");

registry.findObjectById("Hello.HelloRpcServer.TestObj")
  .then(res => {
    console.log(res.response.return.value);
  });