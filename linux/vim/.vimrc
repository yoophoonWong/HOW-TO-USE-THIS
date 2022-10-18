"使用下方命令即可使用其他路劲下的vimrc配置文件
"vim ~/.bashrc
"alias mvim = 'vim -u ~/howToUseThis/linux/vim/.vimrc'
"source ~/.bashrc
"windows下在快捷方式引用地址加上对应的参数就好
"





"编辑器设置
set nocompatible    "设置不兼容VI
syntax on           "语法高亮
filetype on         "检测文件类型
set autoread       "文件改动后自动读取
set guifont=Hack_Nerd_Font_Mono:h10
set encoding=utf-8
set fileencoding=utf-8
"colorscheme onedarkpro
winpos 100 100
set lines=48 columns=210



set wildmenu        "开启命令模糊输入
set wildmode=longest:list,full  "模糊模式


set hlsearch        "hightlisth search 高亮显示搜索结果
set incsearch       "对按回车前所输入的字符进行搜索
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

"map


"imap    input mode map
imap jk <Esc>



"nmap    normal mode map
nmap <Space> :



"插件安装
"plug install进行插件的安装@https://github.com/junegunn/vim-plug
call plug#begin('~/.vim/plugged')
"修改起始页内容(https://github.com/mhinz/vim-startify)
"更多信息  :help startify
Plug 'mhinz/vim-startify'
"设置起始页面自定义字符画  ascii art
let g:ascii = [
\ '  ___    ___ ________  ________  ________  ___  ___  ________  ________  ________      ',
\ ' |\  \  /  /|\   __  \|\   __  \|\   __  \|\  \|\  \|\   __  \|\   __  \|\   ___  \    ',
\ ' \ \  \/  / \ \  \|\  \ \  \|\  \ \  \|\  \ \  \\\  \ \  \|\  \ \  \|\  \ \  \\ \  \   ',
\ '  \ \    / / \ \  \\\  \ \  \\\  \ \   ____\ \   __  \ \  \\\  \ \  \\\  \ \  \\ \  \  ',
\ '   \/  /  /   \ \  \\\  \ \  \\\  \ \  \___|\ \  \ \  \ \  \\\  \ \  \\\  \ \  \\ \  \ ',
\ ' __/  / /      \ \_______\ \_______\ \__\    \ \__\ \__\ \_______\ \_______\ \__\\ \__\',
\ '|\___/ /        \|_______|\|_______|\|__|     \|__|\|__|\|_______|\|_______|\|__| \|__|',
\ '\|___|/                                                                                '
\ ]
"每次运行startify都加载自定义字符画  + startify#fortune#boxed())
let g:startify_custom_header =
          \ 'startify#pad(g:ascii + startify#fortune#quote())'
"初始页列表
let g:startify_lists = [
        \ { 'type': 'files',     'header': ['   文件']            },
        \ { 'type': 'dir',       'header': ['   当前目录 '. getcwd()] },
        \ { 'type': 'sessions',  'header': ['   会话']       },
        \ { 'type': 'bookmarks', 'header': ['   书签']      },
        \ { 'type': 'commands',  'header': ['   命令']       },
        \ ]
"自定义书签
let g:startify_bookmarks = [
        \ {'d': '~/Desktop/'},
        \ ]
"设置cowsay语句   提示未知函数无法设置
"let g:startify_custom_header_quotes =
"      \ startify#fortune#predefined_quotes() + [['somethingwrong', 'yes it is']]
"将header/footer居中设置   这项设置只会cowsay有效 由于设置自定义字符画需要将header设置为boxed，所以注释该设置
"let g:startify_custom_header =
"          \ 'startify#center(startify#fortune#cowsay())'

" 文件资源管理器
Plug 'scrooloose/nerdtree'
Plug 'Xuyuanp/nerdtree-git-plugin'  "NERDTree显示git的状态
Plug 'ryanoasis/vim-devicons'  "NERDTree显示文件或文件夹图标
"高亮不同类型文件名字的插件装了太卡了所以给注释掉了
"Plug 'tiagofumo/vim-nerdtree-syntax-highlight'  "高亮文件名字
let g:NERDtreeChDirMode=2   "自动调整根目录
let g:NERDTreeShowLineNumbers=1 "显示行号
"let g:NERDTreeAutoCenter=1  "光标自动居中 默认值是1 似乎只有C-motion有效
let g:NERDTreeShowHidden=1  "显示隐藏文件
" 涉资文件资源管理器的快捷键 <C-e> => Ctrl+e，该命令覆盖了原本的向下滚动一行的命令
" <C-e> 向下滚动一行，光标位置不变除非超出屏幕
" <C-y> 向上滚动一行，光标位置不变除非超出屏幕
map <silent> <C-e> :NERDTreeToggle<CR>

" 高亮粘贴内容
Plug 'machakann/vim-highlightedyank'

" gruvbox色彩主题
Plug 'morhetz/gruvbox'
autocmd vimenter * ++nested colorscheme gruvbox
set background=dark

" 状态栏
" 需要安装字体包 如  hack nerd font(https://github.com/ryanoasis/nerd-fonts)
" 前面设置了字体 set guifont=Hack_Nerd_Font_Mono:h10
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
let g:airline_theme='simple'
let g:airline#extensions#tabline#enabled = 1
" 使用powerline字体，这样可以显示特殊字符
let g:airline_powerline_fonts = 1
"let g:airline#extensions#tabline#buffer_idx_mode = 1
"nmap <leader>1 <Plug>AirlineSelectTab1
"nmap <leader>2 <Plug>AirlineSelectTab2
"nmap <leader>3 <Plug>AirlineSelectTab3
"nmap <leader>4 <Plug>AirlineSelectTab4
"nmap <leader>5 <Plug>AirlineSelectTab5
"nmap <leader>6 <Plug>AirlineSelectTab6
"nmap <leader>7 <Plug>AirlineSelectTab7
"nmap <leader>8 <Plug>AirlineSelectTab8
"nmap <leader>9 <Plug>AirlineSelectTab9
"let g:airline_theme='gruvbox'

" markdown语法插件
Plug 'godlygeek/tabular'
Plug 'plasticboy/vim-markdown'
" markdown预览插件
Plug 'iamcco/markdown-preview.nvim', { 'do': { -> mkdp#util#install() }, 'for': ['markdown', 'vim-plug']}
let g:mkdp_auto_start = 0 "1=>打开markdown文件立即打开预览
let g:mkdp_auto_close = 1 "关闭文件自动关闭预览，0=>关闭文件依然保留预览
let g:mkdp_refresh_slow = 0 "1=>修改保存或退出插入模式进行预览刷新，0=>实时刷新
let g:mkdp_command_for_global = 0 "1=>为所有文件开启markdown预览功能
let g:mkdp_open_to_the_world = 0 "1=>允许局域网内其他用户预览内容
" 自定义IP详情见: https://github.com/iamcco/markdown-preview.nvim/pull/9
let g:mkdp_open_ip = '' "自定义预览IP地址
let g:mkdp_browser = '' "自定义预览浏览器
let g:mkdp_echo_preview_url = 0 "1=>输出预览内容的URL到命令行
let g:mkdp_browserfunc = '' "自定义打开预览页面的VIM函数，该函数会接收URL作为参数
" options for markdown render
" mkit: markdown-it options for render
" katex: katex options for math
" uml: markdown-it-plantuml options
" maid: mermaid options
" disable_sync_scroll: if disable sync scroll, default 0
" sync_scroll_type: 'middle', 'top' or 'relative', default value is 'middle'
"   middle: mean the cursor position alway show at the middle of the preview page
"   top: mean the vim top viewport alway show at the top of the preview page
"   relative: mean the cursor position alway show at the relative positon of the preview page
" hide_yaml_meta: if hide yaml metadata, default is 1
" sequence_diagrams: js-sequence-diagrams options
" content_editable: if enable content editable for preview page, default: v:false
" disable_filename: if disable filename header for preview page, default: 0
let g:mkdp_preview_options = {
    \ 'mkit': {},
    \ 'katex': {},
    \ 'uml': {},
    \ 'maid': {},
    \ 'disable_sync_scroll': 0,
    \ 'sync_scroll_type': 'middle',
    \ 'hide_yaml_meta': 1,
    \ 'sequence_diagrams': {},
    \ 'flowchart_diagrams': {},
    \ 'content_editable': v:false,
    \ 'disable_filename': 0,
    \ 'toc': {}
    \ }
" use a custom markdown style must be absolute path
" like '/Users/username/markdown.css' or expand('~/markdown.css')
let g:mkdp_markdown_css = ''
" use a custom highlight style must absolute path
" like '/Users/username/highlight.css' or expand('~/highlight.css')
let g:mkdp_highlight_css = ''
" use a custom port to start server or empty for random
let g:mkdp_port = ''
" preview page title
" ${name} will be replace with the file name
let g:mkdp_page_title = '「${name}」'
" recognized filetypes
" these filetypes will have MarkdownPreview... commands
let g:mkdp_filetypes = ['markdown']
" set default theme (dark or light)
" By default the theme is define according to the preferences of the system
let g:mkdp_theme = 'dark'
" 按键映射
nmap <C-s> <Plug>MarkdownPreview "开启预览
nmap <M-s> <Plug>MarkdownPreviewStop "关闭预览
nmap <C-p> <Plug>MarkdownPreviewToggle "开启/关闭预览切换

"emmet语法支持
Plug 'mattn/emmet-vim'

"neoclide/coc.nvim(https://github.com/neoclide/coc.nvim)
"conquer of completion
"代码补全插件
Plug 'neoclide/coc.nvim', {'branch': 'release'}
"CocList extensions 列出coc扩展系列已安装插件
"在下方补充coc系列插件
let g:coc_global_extensions=[
    \'coc-json',
    \'coc-vimlsp',
    \'coc-tsserver',
    \'coc-marketplace']
"启用Tab补全功能
inoremap <silent><expr> <TAB>
      \ coc#pum#visible() ? coc#pum#next(1) :
      \ CheckBackspace() ? "\<Tab>" :
      \ coc#refresh()
inoremap <expr><S-TAB> coc#pum#visible() ? coc#pum#prev(1) : "\<C-h>"
"启用回车选择补全内容
inoremap <silent><expr> <CR> coc#pum#visible() ? coc#pum#confirm()
                              \: "\<C-g>u\<CR>\<c-r>=coc#on_enter()\<CR>"
function! CheckBackspace() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction
"nvim使用ctrl+空格展开/关闭补全列表，vim快捷键ctrl+@
if has('nvim')
  inoremap <silent><expr> <c-space> coc#refresh()
else
  inoremap <silent><expr> <c-@> coc#refresh()
endif
" Use `[g` and `]g` to navigate diagnostics
" Use `:CocDiagnostics` to get all diagnostics of current buffer in location list.
nmap <silent> [g <Plug>(coc-diagnostic-prev)
nmap <silent> ]g <Plug>(coc-diagnostic-next)

" GoTo code navigation.
nmap <silent> gd <Plug>(coc-definition)
nmap <silent> gy <Plug>(coc-type-definition)
nmap <silent> gi <Plug>(coc-implementation)
nmap <silent> gr <Plug>(coc-references)
"调用文档
nnoremap <silent> K :call ShowDocumentation()<CR>

function! ShowDocumentation()
  if CocAction('hasProvider', 'hover')
    call CocActionAsync('doHover')
  else
    call feedkeys('K', 'in')
  endif
endfunction
" Highlight the symbol and its references when holding the cursor.
autocmd CursorHold * silent call CocActionAsync('highlight')

call plug#end()





" GVIM的设置
" 切换GVIM的菜单、工具栏及滚动条的显示 快捷键F2
set guioptions-=m
set guioptions-=T
set guioptions-=r
map <silent> <F2> :if &guioptions =~# 'T' <Bar>
        \set guioptions-=T <Bar>
        \set guioptions-=m <Bar>
        \set guioptions-=r <Bar>
    \else <Bar>
        \set guioptions+=T <Bar>
        \set guioptions+=m <Bar>
        \set guioptions+=r <Bar>
    \endif<CR>

" 设置黑色主题
"set guioptions+=d

