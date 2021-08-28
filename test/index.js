// const registry = require('@tars/registry');

// registry.setLocator("tars.tarsregistry.QueryObj@tcp -h 39.99.162.213 -p 17890");

// registry.findObjectById("Hello.HelloRpcServer.TestObj")
//   .then(res => {
//     console.log(res.response.return.value);
//   });

const registry = require('@tars/registry');

registry.setLocator("service.TarsRegistryProxy.QueryObj@tcp -h 127.0.0.1 -p 4400");

registry.findObjectById("Hello.HelloRpcServer.TestObj")
  .then(res => {
    console.log(res.response.return.value);
  })
  .catch(err => {
    console.log(err)
  })