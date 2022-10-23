

- [Archlinux使用记录](#archlinux使用记录)
  - [系统安装及配置](#系统安装及配置)
    - [系统安装](#系统安装)
    - [系统配置](#系统配置)
  - [图形界面](#图形界面)
    - [图形界面安装](#图形界面安装)
    - [图形界面配置](#图形界面配置)



# Archlinux使用记录

## 系统安装及配置
> archlinux的安装与其他系统一键安装不同，archlinux需要手配配置相关选项，折腾之后才能享受结果

### 系统安装
1. [下载系统](https://archlinux.org/)  
官方提供了一系列[镜像源](https://archlinux.org/download/)用于下载系统镜像，国内可以通过[163](http://mirrors.163.com/archlinux/iso/2022.10.01/)、[阿里云](http://mirrors.aliyun.com/archlinux/iso/2022.10.01/)等镜像服务器进行下载。
2. 启动工具  
[rufus](https://github.com/pbatard/rufus)是一款用来帮助格式化和创建可引导USB闪存驱动器的实用工具，可以制作大多数系统的引导启动工具
3. 开始安装  
需要注意在读取安装引导时会提示启动模式（bios、uefi），这回影响后续添加系统引导程序的操作，进入安装界面后还可以通过下面命令判断机器引导模式
```sh
ls /sys/firmware/efi/efivars
#如果不存在该项内容，则系统以BIOS模式引导启动
```
4. 设置网络  
命令`ip a`可用来查看当前设备的网络，如未分配有效可用IP可通过下面命令进行配置
```sh
#查看ens33网卡状态
ip addr flush dev ens33
#配置网络
ifconfig ens33 x.x.x.x netmask 255.255.255.0
#设置网关
route add default gw x.x.x.x
#设置域名服务器
echo "nameserver 114.114.114.114" >> /etc/resolv.conf
echo "nameserver 8.8.8.8" >> /etc/resolv.conf
```
5. 磁盘分区  
命令`fdisk -l`查看磁盘分区信息，[官方推荐分区设置](https://wiki.archlinux.org/title/Installation_guide#Example_layouts)为
> /boot     => 大于300MiB
> [SWAP]    => 大于512MiB
> /mnt      => 磁盘剩余空间
命令`fdisk /dev/sda`进行分区
6. 分区格式化并挂载  
命令`mkfs -t type disk-partition`对磁盘分区进行格式化，其中：
> /boot     分区设置成ext2
> [SWAP]    分区采用`mkswap`命令格式化
> 其余分区设置成ext4
命令`mount mntdev mntpoint`将已格式化的分区挂载至挂载点，其中：
> /dev/sda1 => /mnt/boot
> /dev/sda2 采用swapon设置
> /dev/sda3 => /mnt
7. 安装系统  
archlinux系统需要在线安装，安装前需要更新镜像源，可以通过手动或自动对镜像源进行更新  
```sh
#手动更新，如[清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/help/archlinux/)：  
#手动在配置文件中设置镜像源
vim /etc/pacman.d/mirrorlist
#刷新软件包缓存
pacman -Syy
#自动更新：
#命令自动检索最新镜像并更新镜像配置文件
reflector --verbose --latest 10 --sort rate --save /etc/pacman.d/mirrorlist
#安装基础系统
pacstrap /mnt/ base linux linux-firmware net-tools networkmanager openssh vi
```
8. 创建fstab  
将分区挂载信息写入到fstab文件中方便挂载持久化`genfstab -U /mnt >> /mnt/etc/fstab`
9. 配置系统  
```sh
## 语言设置
###
#将/mnt设置为根目录
arch-chroot /mnt
#取消本地语言配置文件中`en_US.UTF-8 UTF-8`的注释
vim /etc/locale.gen
#生成语言环境
locale-gen
#设置语言变量
echo "LANG=en_UTF-8" > /etc/locale.conf

## 时区设置
###
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
#将硬件时钟设置为UTC
hwclock --systohc --utc

## 主机名设置
###
echo "hostname" > /etc/hostname

## 密码设置
###
passwd
```
10. 配置系统引导
```sh
pacman -S grub
grub-install /dev/sda
grub-mkconfig -o /boot/grub/grub.cfg
```
重新启动`reboot`即可进入安装好的系统了
### 系统配置
1. 网络配置
默认系统网络未启用，通过一下命令启用系统网络，并将其设置未默认启动服务
```sh
systemctl start NetworkManager
systemctl enable NetworkManager
```
现在系统可以正常使用了，但是由于没有安装图形界面，系统只显示终端命令行界面

## 图形界面
### 图形界面安装
设置分辨率  
- [Xrandr](https://wiki.archlinux.org/title/Xrandr)
- [arandr]()  

窗口效果合成器
- [picom](https://github.com/yshui/picom) 透明、动画等特效。[介绍](https://www.bilibili.com/video/av470184195/)

状态栏  
- [polybar](https://github.com/polybar/polybar)
图形窗口系统  
-[xorg](https://wiki.archlinux.org/title/Xorg),[x.org](https://www.x.org/wiki/)  

图形窗口启动器  
- [xorg-xinit](https://wiki.archlinux.org/title/Xinit)

平铺式窗口管理器  
- [bspwm](https://github.com/baskerville/bspwm)

软件启动器  
- [rofi](https://github.com/davatorium/rofi)
- [dmenu]()

壁纸管理器  
- [feh](https://github.com/derf/feh)
- [nitrogen]()

快捷键管理  
- [sxhkd](https://github.com/baskerville/sxhkd)

虚拟终端
- [alacritty](https://github.com/alacritty/alacritty)
- [xfce4-terminal]

AUR包管理软件
- [paru](https://github.com/Morganamilo/paru)

中文输入法  
- [fcitx5](https://blog.csdn.net/m0_47627464/article/details/113790309)

显卡驱动
- [vmware]()  =>  `xf86-video-vmware`
- [amd]()     =>  `xf86-video-amdgpu`
- [nvidia]()  =>  `nvidia nvidia-utils`

cpu微码[Microcode](https://wiki.archlinux.org/title/Microcode_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))
- [amd]()     =>  `amd-ucode`
- [intel]()  =>  `intel-ucode`

触摸板驱动
- [笔记本用]()        =>  `xf86-input-synaptics`
### 图形界面配置
1. xinit配置  
配置文件为`~/.xinitrc`，可以从`/etc/X11/xinit/xinitrc`将样例文件复制过来
- 删除[xterm](https://wiki.archlinux.org/title/Xterm)的设置  
增加配置
```sh
setxkbmap us &  #设置键盘类型
picom -f &      #设置窗口淡入淡出效果
exec bspwm      #启动bspwm
```
2. bspwm配置  
配置文件为`~/.config/bspwm/bspwmrc`，可以从`/usr/share/doc/examples/bspwmrc`将样例文件复制过来  

3. sxhkd配置
配置文件为`~/.config/sxhkd/sxhkdrc`，可以从`/usr/share/doc/examples/sxhkdrc`将样例文件复制过来  
-super +Return  :模拟终端   [xfce4-terminal]

4. picom配置  
配置文件`/etc/xdg/picom.conf`，将`vsync = true`注释掉

5. arandr配置  
- 将显示器分辨率设置正确后保存脚本，给予脚本可执行权限
- 在`/.xinitrc`中添加`arandr`的脚本路径`$HOME/.screenlayout/display.sh`
