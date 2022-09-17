# VIM

增加文本
a/A     =>apend         当前字符/行后
i/i     =>insert        当前字符/行前 
o/O     =>open a line   当前行前/后增一行
光标移动
h/j/k/l =>左下上右 
H/J/K/L =>最坐下上右   ?????

内容删除
[delete]delete          del键，删除当前字符
dw      delete word     删除当前单词
diw     delete inner word   删除包含光标的单词
di"     delete inner "      似乎是只有符号有效  字母无效
daw     delete around word  删除单词及附带的空格
dd                     删除当前行
x                       删除当前字符


内容修改
        change          修改，字面意思 无快捷键
cw      change word     修改单词，删除并插入
ciw     change inner word   修改当前单词即删除当前单词并进入插入模式   diw+i
ct)     change to       修改到)前的字符，`其他字符`一样
ci"     change inner "  修改""双引号之间的内容， 似乎是只有符号有效 字母无效
u       undo            撤销操作
CTRL+r                  保留上次操作




查找内容
        find            查找
fa      find s backward   查找当前行光标后第一个s
Fs      Find s forward    查找当前行光标前的第一个s
;/.     Find repeat       重复前一个查找命令
/word   find all word and jump to the final word
?word   find all word and jump to the start word
%s/oldchar/newchar/g    全局查找并替换字符



移动
hjkl    ←↓↑→
w       move to backward word end
b       move to forward word end
:rowNum move to row.rowNum
rowNumG move to row.rowNum
0       move to row head
$       move to row end
H/L     move to window top/bottom
gg      move to file head
G       move to file end
CTRL+o  move to last position

CTRL+F  forward 向下翻页
CTRL+D          向下翻页
CTRL+U  upward  向上翻页

复制粘贴
yy      yank    复制当前行
yw      yank word       复制当前单词
p       paste   粘贴



just a test "just a test"


DsGF
asa
a test just a