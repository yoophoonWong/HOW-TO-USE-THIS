# 更改默认起始位置
1、`echo "Set-Location defaultPath" > $Profile`   //将默认路径添加到PowerShell的配置文件中
>Profile是PowerShell的默认属性文件  
>路劲为 **C:\Users\UserName\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1**  

2、管理员启动PowerShell执行命令`set-executionpolicy remotesigned` 选择是  **Y** 即可  

# 更改PowerShell的字符编码
$PSDefaultParameterValues['Out-File:Encoding'] = 'utf8nobom' //设置字符集为UTF-8
