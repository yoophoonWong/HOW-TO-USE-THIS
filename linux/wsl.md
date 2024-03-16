# [WSL](https://learn.microsoft.com/zh-cn/windows/wsl/)
## 安装
```powershell
wsl --install #默认wsl2安装ubuntu发行版
wsl --list --oline #列出在线商店可用发行版
wsl --install -d <DistributionName> #安装指定发行版
wsl -l -v #查看WSL版本 wsl --list --verbose
wsl --set-default-version <Version> #设置版本 <Version>可选值为1或2
#设置与wsl命令一起使用的默认linux发行版
wsl -s <Distribution> #wsl --set-default <Distribution>  ##wsl -s Debian
wsl npm init #在Debian中运行npm init命令
wsl -d <DistributionName> #运行指定<DistributionName>发行版
```
## 版本切换
```powershell
#设置发行版使用wsl的版本
wsl -s <Distro> <ver> #wsl --set-version <distroName> <version>
wsl --set-version Ubuntu-20.04 2 #设置Ubuntu-20.04使用wsl2
```

## [配置文件](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#experimental-settings)
```bash
[wsl2]
memory=1GB  #限制wsl内存占用1G
[experimental]
autoMemoryReclaim=gradual  #缓慢释放缓存
sparseVhd=true
```
