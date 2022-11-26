`wine notepad` 启动记事本
`wine regedit` 启动注册表编辑器
`wine taskmgr` 启动任务管理器
`wine uninstaller` 
`wineboot`
## [QQ中文显示问题](https://www.zhihu.com/question/334179291/answer/2375991973)
1. 需要中文语言环境，`locale -a`命令显示`zh_CN.UTF-8`，如果不显示则需要修改`/etc/local-gen`中的内容并执行`locale-gen`
2. 在wine命令前添加`LC_ALL=zh_CN.UTF-8 wine software.exe`
    - 也可以将系统环境`LANG=zh_CN.UTF-8`，这样会导致系统级别的汉化挺怪异的