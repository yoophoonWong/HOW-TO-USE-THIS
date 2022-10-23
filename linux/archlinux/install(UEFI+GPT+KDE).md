
# [Archlinux Install(UEFI+GPT+KDE)](https://www.bilibili.com/video/av898108481/)
1. 停止reflector服务 禁止自动更新服务器列表
> systemctl stop reflector.service

2. 连接网络  
- 有线连接  
> 若是连接到已经有网的路由器可以自动联网  

- 无线连接  
ping 一下某个网站 看看是否连接成功  
```sh
iwctl                               #执行iwctl命令，进入交互式命令行
device list                         #列出设备名，比如无线网卡看到叫 wlan0
station wlan0 scan                  #用wlan0网卡扫描网络
station wlan0 get-networks          #列出网络
station wlan0 connect 无线网名字    #连接网络名字 输入密码
exit                                #(quit)成功后退出
```

3. 时间设置  
同步网络时间`timedatectl set-ntp true`
4. 修改软件源  
把中国的服务器排在前列`nano /etc/pacman.d/mirrorlist`
5. 安装SSH工具  
```sh
pacman -Syyu刷新但是不要更新软件包
pacman -S openssh安装ssh远程软件
systemctl start sshd启用sshd服务
passwd设置当前root账户的密码
ip a查看ip地址
```
使用SSH软件连接
填入之前查看的ip地址和账户名root 输入密码即可连接成功
之后的步骤都可以在SSH上完成 不用繁琐的敲命令 可以复制粘贴  
6. 磁盘分区、格式化及挂载  
- 分区
```sh
fdisk -l 查看磁盘列表
fdisk /dev/sda
分区sda磁盘

fdisk磁盘操作手册
m 帮助
g 小写g创建gpt格式磁盘
n 创建分区
p 查看分区
w 保存并退出 所有的操作没有执行w前都不会生效
#第1个分区 序号1 分配大小+512M 作为ESP启动分区
#第2个分区 序号2 分配大小+4G 作为swap交换分区
#第3个分区 序号3 分配大小+30G 作为/根目录
#第4个分区 序号4 一路回车剩余空间都给它 作为/home目录
```
- 格式化
```sh 
mkfs.vfat /dev/sda1 # 或者mkfs.fat -F32 /dev/sda1
mkswap /dev/sda2
mkfs.ext4 /dev/sda3
mkfs.ext4 /dev/sda4
swapon /dev/sda2
```
- 挂载  
```sh
#必须先挂载根目录 才能挂载其他目录
mount /dev/sda3 /mnt
mkdir /mnt/home
mkdir /mnt/boot
mount /dev/sda4 /mnt/home
mount /dev/sda1 /mnt/boot
```
7. 系统安装  
往/mnt目录里安装系统，其中最基础的四个包是base base-devel linux linux-firmware  
`pacstrap /mnt base base-devel linux linux-firmware dhcpcd iwd vim sudo bash-completion nano net-tools openssh man git wget zsh fish`
- 持久化硬盘挂载  
```sh
##生成fstab
genfstab -U /mnt >> /mnt/etc/fstab
##查看fstab 若正确则进行下一步
cat /mnt/etc/fstab
```
- 系统配置
```sh
#从当前的live环境切换到刚安装的系统内
arch-chroot /mnt
#编辑hostname 名字自行取名 如arch 填入里面
nano /etc/hostname
#编辑hosts 我这里的名字是arch可自行更改
nano /etc/hosts
#内容如下
127.0.0.1   localhost
::1         localhost
127.0.1.1   arch
#设置时区
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
#硬件时间设置
hwclock --systohc
#编辑语言环境
nano /etc/locale.gen
#ctrl+w搜索en_US注意大小写
#alt+w搜索下一个 找到en_US.UTF-8.UTF-8
en_US.UTF-8.UTF-8 #前面的#号删除
#ctrl+x  按y 再回车保存退出
#使刚才编辑的语言环境生效
locale-gen
#*往/etc目录下的locale.conf文件里写入如下内容*
#*LANG=en_US.UTF-8*
#*相当于nano /etc/locale.conf*
#*里面输入LANG=en_US.UTF-8*
echo 'LANG=en_US.UTF-8' > /etc/locale.conf
#编辑archlinuxcn中国源(可选项  非必须  也可以在安装完之后 进入桌面再编辑)
nano /etc/pacman.conf
#ctrl+w 搜索Color注意大小写 删除#号
#系统报错会彩色显示 方便用户排查
#[multilib]这两行前面的#号删除
#再手动添加[archlinuxcn]源
#我这里以中科大和网易开源镜像站为例
#其他地址 如清华 阿里云 或者你所在的高校有archlinuxcn源 可以自行添加
[archlinuxcn]
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
Server = http://mirrors.163.com/archlinux-cn/$arch
#ctrl+x  按y 再回车保存退出

#设置root密码
passwd root   #*当前账户就是root 可以不用打root*
#新建用户名arch 可自行更改用户名
useradd -m -G wheel -s /bin/bash arch
#设置arch用户名的密码
passwd arch
#编辑arch用户的权限
EDITOR=nano visudo

#ctrl+w搜索%wheel
#找到# %wheel ALL=(ALL:ALL)ALL
#删除前面的#号
#ctrl+x  按y 再回车保存退出

#安装 cpu微码和引导软件
pacman -S amd-ucode grub efibootmgr os-prober
#//如果是intel的cpu 则输入intel-ucode
#//os-prober查找已安装的操作系统 推荐实体机上安装
#安装grub引导
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
#说明
##grub-install *安装grub*
##--target=x86_64-efi      *目标架构x86架构64位 efi启动方式  若不确定使用uname -a 可以查看*
##--efi-directory=/boot      *就是我sda1挂载的/boot位置*
##--bootloader-id=GRUB     *这里的GRUB名字可以自行更改 甚至这一段都可以不用写*
#生成grub
grub-mkconfig -o /boot/grub/grub.cfg
```
- 桌面安装  
```sh
#安装KDE桌面 字体 浏览器等软件包
pacman -S plasma konsole dolphin     *kde桌面和终端，文件管理器*
pacman -S ntfs-3g          *可以读取ntfs格式磁盘 实体机上推荐安装*
pacman -S os-prober     *查找已安装的操作系统 实体机上推荐安装*
pacman -S adobe-source-han-serif-cn-fonts adobe-source-han-sans-cn-fonts wqy-zenhei wqy-microhei noto-fonts-cjk noto-fonts-emoji noto-fonts-extra ttf-dejavu  
#*中文字体 这里如果不安装 之后设置语言的时候都是框框不好辨认*
pacman -S firefox ark gwenview packagekit-qt5 packagekit appstream-qt appstream man neofetch net-tools networkmanager openssh git wget
#这里安装的软件包只适用于vmware虚拟机
pacman -S gtkmm gtk2 gtkmm3 open-vm-tools xf86-input-vmmouse xf86-video-vmware
#*vmware虚拟机的自适应分辨率*
#开机启动 显示管理器 网络管理 ssh 虚拟机自适应分辨率 注意大小写
systemctl enable NetworkManager sddm vmtoolsd sshd
#*vmware虚拟机刚才安装了vmware的软件包才能启动vmtoolsd进程*

#编辑文件
nano /etc/mkinitcpio.conf
MODULES=(vsock vmw_vsock_vmci_transport vmw_balloon vmw_vmci vmwgfx)
#ctrl+x  按y 再回车保存退出

#运行以下命令 使刚才编辑的配置文件生效
mkinitcpio -p linux

#启动时候的live环境 分区后 挂载了本机的磁盘
#又使用arch-chroot /mnt命令从live环境切换到刚安装的系统内

#现在已经安装完成 要退回到启动时候的live环境
#exit或者ctrl+d

#卸载本机的/mnt目录
umount -R /mnt
#重启
reboot

#输入密码登录进桌面环境
#更改KDE中文界面
#安装aur助手 前提是开启aur中国源nano /etc/pacman.conf
pacman -S archlinuxcn-keyring
#如果报错则执行以下命令
rm -rf /etc/pacman.d/gnupg     #*rm命令谨慎操作*
pacman-key --init
pacman-key --populate archlinux
pacman-key --populate archlinuxcn
pacman -S yay paru
#yay paru都是aur助手 任选一种 还有其他的aur助手软件可以自行搜索
#安装aur中国源软件库里面的软件 以网易云为例
yay -S netease-cloud-music   #或者paru -S netease-cloud-music
#安装fcitx5输入法
pacman -S fcitx5-im fcitx5-chinese-addons fcitx5-pinyin-moegirl fcitx5-pinyin-zhwiki fcitx5-material-color
#编辑运行环境 使fcitx5输入法生效
EDITOR=nano sudoedit /etc/environment
#输入以下内容
GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
XMODIFIERS=@im=fcitx
SDL_IM_MODULE=fcitx
```

