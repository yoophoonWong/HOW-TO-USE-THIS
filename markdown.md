- [1. markdown](#1-markdown)
- [2. 列表](#2-列表)
  - [2.1. 有序列表](#21-有序列表)
  - [2.2. 无需列表](#22-无需列表)
- [3. 清单 ***NO FUNCTION IN VSCODE***](#3-清单-no-function-in-vscode)
- [4. 代码块](#4-代码块)
- [5. 数学公式 **Ctrl+M**](#5-数学公式-ctrlm)
- [6. 表格](#6-表格)
- [7. 引用](#7-引用)
  - [7.1. 可以使用的HTML标签](#71-可以使用的html标签)
# 1. markdown
 
Ctrl+B          → **粗体**  
Ctrl+I          → *斜体*  
Alt+S           → ~~删除线~~  
Ctrl+Shift+[    → 降低文字级别  
Ctrl+Shift+]    → 提升文字级别  
<u>下划线</u>   → 下划线

# 2. 列表
## 2.1. 有序列表
1. 起床
2. 
## 2.2. 无需列表
- 张三
- 李四
- 王五
# 3. 清单 ***NO FUNCTION IN VSCODE***
- [ ] 起床  
- [ ] 吃饭
# 4. 代码块
``` javascript
var name = `张三`
var `showName` = name => console.log(name)
```
`code here`  //行内代码块
# 5. 数学公式 **Ctrl+M**
$x_i^2=\frac{\hat x^2}{2}\times\div\int^{+\infty}_{-\infty}xdx\sum^0_{i=+\infty}$
# 6. 表格
| No  | title    | format |
| --- | -------- | ------ |
| 1   | 居中对齐 | :--:   |
| 2   | 左对齐   | :--    |
| 3   | 右对齐   | --:    |

# 7. 引用
**文字引用**
> 力拔山兮气盖世，时不利兮骓不逝，骓不逝兮可奈何，虞兮虞兮奈若何！  
> ---楚 项羽   

**图片引用**   
![萧何月下追韩信](xiaohezhuihanxin.jpeg)   
![萧何月下追韩信](%E8%90%A7%E4%BD%95%E8%BF%BD%E9%9F%A9%E4%BF%A1.jpeg) 
**脚注引用** **NO FUNCTION IN VSCODE**  
资本主义!^[资本主义]  
[^资本主义]:1321  
[百度][id]  
[id]:baidu.com"搜索"  

**文字链接**  
[百度搜索](https://www.baidu.com)
## 7.1. 可以使用的HTML标签
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
<input type="checkbox" name="things">学习<br/>
<input type="checkbox" name="things">游戏<br/>


<hr>上下标问题  <br/>
H<sub>2</sub>O和x<sup>2</sup>  
