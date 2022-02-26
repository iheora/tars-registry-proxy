## Tars 注册中心代理服务

自建查询服务，替换 tars 原有注册中心，配合内网穿透工具（[chisel](https://github.com/jpillora/chisel/releases)），实现本地代理线上服务。

```js
const registry = require("@tars/registry");

registry.setLocator("tars.tarsregistry.QueryObj@tcp -h 10.1.1.204 -p 17890");

registry.findObjectById("winwin.tars_file_registry.TarsFileRegistryObj")
    .then(function (result) {
        console.log(result.response.return.value);
    });
```

### tars 简介

https://tarscloud.github.io/TarsDocs/

### 脚手架

https://tarscloud.github.io/TarsDocs/dev/tars.js/nodetools-cli.html

### tars2node

https://tarscloud.github.io/TarsDocs/dev/tars.js/tars2node.html

```js
tars2node Protocol.tars --client
```

```js
tars2node Protocol.tars --client --ts
```

### 安装部署

https://tarscloud.github.io/TarsDocs/installation/docker-install.html

https://tarscloud.github.io/TarsDocs/installation/docker.html

