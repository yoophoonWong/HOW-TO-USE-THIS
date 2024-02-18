- [1. markdown](#1-markdown)
  - [1.1. 一些快捷键](#11-一些快捷键)
- [2. 列表](#2-列表)
  - [2.1. 有序列表](#21-有序列表)
  - [2.2. 无序列表](#22-无序列表)
  - [2.3. todo列表](#23-todo列表)
- [3. 特殊内容](#3-特殊内容)
  - [3.1. 代码显示](#31-代码显示)
    - [3.1.1. 行内代码](#311-行内代码)
    - [3.1.2. 块级代码](#312-块级代码)
  - [3.2. 数学公式 **Ctrl+M**](#32-数学公式-ctrlm)
  - [3.3. 表格](#33-表格)
  - [3.4. 引用](#34-引用)
  - [3.5. 可以使用的HTML标签](#35-可以使用的html标签)
- [4. 文章末尾用于定义参照链接](#4-文章末尾用于定义参照链接)


# 1. markdown  

>软件：vscode+Markdown ALL in One  

## 1.1. 一些快捷键

|        功能        |                   快捷键                   |              说明              |
| :----------------: | :----------------------------------------: | :----------------------------: |
|                    |                **常规功能**                |                                |
|      **粗体**      |                   ctrl+B                   |         将文字加粗显示         |
|       *斜体*       |                   ctrl+I                   |         将文字倾斜显示         |
|     ~~删除线~~     |                   alt+s                    |        给文字添加删除线        |
|    切换todo状态    |                   alt+c                    |     切换todo状态与之前相反     |
|     格式化表格     |                alt+shift+f                 |       格式化表格原始文本       |
|   <u>下划线</u>    |                                            |     利用html标签添加下划线     |
|    标题等级降低    |                ctrl+shift+[                |       使文字等级降低一级       |
|    标题等级提高    |                ctrl+shift+]                |       使文字等级提高一级       |
|      切换预览      |                ctrl+shift+v                |     在当前窗口新增预览窗口     |
|      侧窗预览      |                  ctrl+k v                  |       新增侧窗口进行预览       |
|                    | **命令面板功能<br/>(Markdown All in One)** |                                |
|      生成目录      |                    ctoc                    |    Create Table of Contents    |
|      更新目录      |                    utoc                    |    Update Table of Contents    |
| 增加/更新章节序号  |                    asn                     |   Add/Update section numbers   |
|    移除章节序号    |                    rsn                     |     Remove section numbers     |
|    生成行内代码    |                    tcs                     |        Toggle code span        |
|    生成块级代码    |                    tcb                     |       Toggle code block        |
| 转成网页(当前文件) |                   print                    | Print current document to HTML |
| 转成网页(指定文件) |                   print                    |    Print documents to HTML     |
|  触发数学公式编辑  |                tme(ctrl+m)                 |    Toggle math environment     |
|      触发列表      |                     tl                     |          Toggle list           |

**一些说明:**  
- 粗体和斜体可以同时设置，但快捷方式只有先设置斜体再设置粗体才可设置粗斜体，否则会将粗体变为斜体
- 部分命令面板命令使用快捷方式或者直接文本输入会更高效

# 2. 列表
## 2.1. 有序列表
1. 起床
2. 吃饭
## 2.2. 无序列表
- 张三
- 李四
- 王五
## 2.3. todo列表
- [x] 起床  
- [ ] 吃饭  
# 3. 特殊内容
## 3.1. 代码显示
### 3.1.1. 行内代码
`code here`  //行内代码
### 3.1.2. 块级代码
``` javascript
var name = `张三`
var `showName` = name => console.log(name)
```
## 3.2. 数学公式 **Ctrl+M**
编写样式采用[LaTex](https://marketplace.visualstudio.com/items?itemName=goessner.mdmath)  
$x_i^2=\frac{\hat x^2}{2}\times\div\int^{+\infty}_{-\infty}xdx\sum^0_{i=+\infty}$
## 3.3. 表格
>表格无法合并单元格，有局限性  

| No   |  title   | format |
| :--- | :------: | -----: |
| 1    | 居中对齐 |   :--: |
| 2    |  左对齐  |    :-- |
| 3    |  右对齐  |    --: |

## 3.4. 引用
**文字引用**
> 力拔山兮气盖世，时不利兮骓不逝，骓不逝兮可奈何，虞兮虞兮奈若何！  
>> ---楚 项羽   

**图片引用**   
![萧何月下追韩信](xiaohezhuihanxin.jpeg)  
![萧何月下追韩信](%E8%90%A7%E4%BD%95%40%E8%BF%BD%E9%9F%A9%E4%BF%A1.jpeg)  
>显示图片采用url路径存在中文时转换为html会出错。`无法读取文件，已使用图像路径而不是 base64 编码。`

**脚注引用** **NO FUNCTION IN VSCODE**  
>Markdown All in One不支持脚注，下面格式为参照链接，本质仍为超链接。

网络链接：[跳转百度][百度一下]  
文件链接：[查看文件][文件链接]  
>参照链接定义宜放在文档末尾不影响排版布局

**超文本链接**  
[百度搜索](https://www.baidu.com)是搜索引擎的一种

## 3.5. 可以使用的HTML标签
<span style="text-decoration:line-through;text-decoration-color:red;color:green;background:yellow;">张三</span>
<hr>有序标签
<ol style="list-style:circle">
<li>张三</li>
<li>李四</li>
<li>王五</li>
<li>4</li>
</ol>
<hr>选框补充列表问题  <br/>
<input type="radio" name="name">张三<br/>
<input type="radio" name="name">李四<br/>
<input type="radio" name="others">李四<br/>
<input type="checkbox" name="things">学习<br/>
<input type="checkbox" name="things">游戏<br/>
<hr>上下标问题  <br/>
H<sub>2</sub>O和x<sup>[2][^id]</sup>  
<br/>
<br/>

# 4. 文章末尾用于定义参照链接
`[参照链接标记]:参照链接位置`

[百度一下]:https://www.baidu.com/
[文件链接]:how%20To%20Use%20git.md#7-已有空库推送项目上去