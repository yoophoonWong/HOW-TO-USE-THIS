# 一些记录
- `// @require file://D:\Github\how-to-use-this\tampermonkey\biquge365.net阅读背景调整.js`可以调用本地文件，方便脱离浏览器进行代码编辑，需要在扩展设置中启用(扩展->已安装的扩展->详细信息->允许范文文件URL)
- [x] 允许访问文件 URL
---
- 通过webhook同步脚本到greasyfork

    在项目仓库→设置→webhook中设置
    
    参数说明：
    - payload URL：接受响应的地址，如(greasy fork):`https://greasyfork.org/zh-CN/users/identification/webhook`
    - content Type:内容类型，github提供了`
application/x-www-form-urlencoded
`和`
application/json
`两种类型
    - secret 密钥 通信安全凭证
---
