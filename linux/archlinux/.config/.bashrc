#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

# alias here
alias ls='ls --color=auto'
alias ll='ls -l --color=auto'
alias la='ls -a --color=auto'

# proxy here
set proxy
export http_proxy="http://127.0.0.1:7890"
export https_proxy="http://127.0.0.1:7890"
export ftp_proxy="http://127.0.0.1:7890"
export all_proxy="socks://127.0.0.1:7890"
export no_proxy="localhost,127.0.0.1"

# autorun here
# start startx
# autologin See getty archwiki
if [[ $(tty) == "/dev/tty1" ]]; then
    startx
fi

PS1='[\u@\h \W]\$ '
