"使用下方命令即可使用其他路劲下的vimrc配置文件
"vim ~/.bashrc
"alias mvim = 'vim -u ~/howToUseThis/linux/vim/.vimrc'
"source ~/.bashrc

"
"编辑器设置
set nocompatible    "设置不兼容VI
syntax on           "语法高亮
filetype on         "检测文件类型
set autoread       "文件改动后自动读取


set wildmenu        "开启命令模糊输入
set wildmode=longest:list,full  "模糊模式


set hlsearch        "hightlisth search 高亮显示搜索结果
set incsearch       "对搜索前所输入的内容进行搜索
set ignorecase      "搜索忽略大小写
set showmatch       "高亮匹配的括号
set matchtime=5       "高亮匹配括号时间
"
"对齐缩进
set autoindent      "自动对齐
set smartindent     "智能对齐
"set tabstop 4      "设置tab键显示宽度
set expandtab       "设置tab扩展为空格
set softtabstop=4   "软设置如果tab字符扩展为空格则第一次输入tab为设置的空格数第二次输入为一个tab符否则输入tab符
"显示字符
"set list
"set listchars=tab
">~,space=.
set shiftwidth=4    "设置自动缩进


set nu              "
set relativenumber  "
set cursorline      "
set ruler           "


"imap    input mode map
imap jk <Esc>



"nmap    normal mode map
nmap <Space> :



"插件安装
call plug#begin('~/.vim/plugged')
Plug 'scrooloose/nerdtree'
call plug#end()