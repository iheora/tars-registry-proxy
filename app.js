const Tars = require("@tars/rpc")
const path = require("path")

const service  = require("./protocol/QueryFImp").registryProxy;

const svr = new Tars.server();
const impMap = {
  "service.TarsRegistryProxy.QueryObj": service.QueryFImp
};
svr.initialize(process.env.TARS_CONFIG || path.resolve(__dirname, "./dev.config.conf"), function (server){
  const servantName = `${server.Application}.${server.ServerName}.QueryObj`

  server.addServant(impMap[servantName], servantName)
});
svr.start()
console.log("tars server started")