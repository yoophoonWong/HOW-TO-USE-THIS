### 访问共享文件夹
```sh
#需要安装虚拟机工具  open-vm-tools
#安装玩之后记得启动
sudo pacman -S open-vm-tools
#查看共享文件夹
vmware-hgfsclient
#挂载共享文件夹
sudo vmhgfs-fuse .host:/{sharedFolder} mountPath -o nonempty -o allow_other
