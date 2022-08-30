### 1、下载git
---
### 2、配置ssh密钥
`ssh-keygen -t rsa -C 'email'` // 根据邮箱生成公钥

---
### 3、配置git
`git config --global user.name` '用户名'   
`git config --global user.email` 'email'  
`git config --list`   //查看git的配置信息  

---
### 4、在gitee里面设置公钥
gitee→设置→安全设置→ssh公钥
将第2步生成的公钥复制到gitee

---
### 5、克隆项目
`git clone` 仓库地址

---
### 6、已有空库，推送项目上去  
`git init` //初始化仓库  
`git remote add origin` "仓库地址"  //添加远程仓库  
`git push -u origin` "仓库分支"  //推送  

### 7、分支相关  
`git checkout -b newBranch` 在创建``newBranch分支并切换到新分支  
上面命令实际是下面命令的简化版  
`git branch newBranch`  
`git checkout newBranch`    
### 8、查看当前文件夹的仓库  
`git remote -v` //显示拉取、推送的地址  
`git remote show origin` //显示更多的信息  

### 9、克隆仓库到非空文件夹  
```POWERSHELL
//1、克隆仓库到任意文件夹
git clone --no-checkout https://git.oschina.NET/NextApp/platform.git anyFolder
//2、复制`.git`到目标非空文件夹
//3、设置git信息 注意查看仓库地址
git reset --hard HEAD
```