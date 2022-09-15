# smb
sudo apt-get install samba   //安装smb
sudo vim /etc/samba/smb.conf //配置

```conf
[share]
comment = share folder
browseable = yes
path = /path/to
create mask = 0700
directory mask = 0700
valid users = yoophoon
force user = yoophoon
force group = yoophoon
public = yes
available = yes
writable = yes
```
`sudo samba restart   或   sudo systemctl restart smbd` //启动服务  
`sudo ufw allow samba`      //配置防火墙允许smb访问  
`sudo smbpasswd -a username`  //给smb添加系统用户  
