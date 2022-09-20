# 安装
sudo apt update
sudo apt install vino

# 配置
## 自启动
mkdir -p ~/.config/autostart
cp /usr/share/applications/vino-server.desktop ~/.config/autostart

## 配置软件
gsettings set org.gnome.Vino prompt-enabled false  # 禁止弹窗
gsettings set org.gnome.Vino require-encryption false  # 禁止加密
" 以上两个也可以在路径下自行勾选org->gnome->desktop->remote-access
gsettings set org.gnome.Vino authentication-methods "['vnc']" 
gsettings set org.gnome.Vino vnc-password $(echo -n 'yoophoon'|base64)  # 设置密码为yoophoon并采用base64编码


gsettings set org.gnome.Vino require-encryption false  // 不晓得有没有用





sudo apt install dconf-editor   //终端输入dconf-editor进入配置界面

