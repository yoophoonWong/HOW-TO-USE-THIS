# Note For NodeJS
## some settings for NodeJS
1. 设置全局模块存放路径及缓存路径
```BASH
//node_blobal   => 模块存放位置
//node_cache    => 文件缓存位置
npm config set prefix node_global_dir
npm config set cache node_cache_dir
```
2. 设置镜像源
```BASH
//设置镜像源 淘宝的
npm config set registry https://registry.npm.taobao.org
//查看镜像源
npm config get registry
```
3. 查看软件的配置信息
```BASH
//json格式
npm config list --json
//详细信息
npm config ls -l
//查看全局模块的安装路径
npm root -g
```