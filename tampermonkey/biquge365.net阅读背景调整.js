// ==UserScript==
// @name         biquge365.net阅读背景调整
// @namespace    http://tampermonkey.net/
// @version      2024-02-16
// @description  try to take over the world!
// @author       You
// @match        https://www.biquge365.net/chapter/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=biquge365.net
// @grant        none
// @run-at document-end

// ==/UserScript==

(function () {
    //window.onload = function () {
    //隐藏功能菜单
    document.querySelector('header.head').style.display = 'none'
    //隐藏报错按钮
    let errorBar = document.querySelectorAll('.baocuo')
    for (let i = 0; i < errorBar.length; i++) {
        errorBar[i].style.display = 'none'
    }

    //隐藏顶部翻页菜单
    document.querySelector('div#fanye').style.display = 'none'
    document.querySelector('#txt > p').style.display = 'none'
    document.querySelector('#neirong > div.gongneng1').style.display = 'none'

    //设置body背景
    let page = document.querySelector('#moshi')
    page.style.backgroundColor = '#999999'

    //设置文章区域背景
    let content = document.querySelector('#neirong')
    content.style.cssText = 'font-family: "microsoft yahei";color:#cc9966;background-color:#666666;border:none;margin-bottom:20px'
    content.querySelector('h1').style.cssText = 'color:#cc9966;font:\'Microsoft YaHei\',Arial,Helvetica,Sans-Serif'
    content.querySelector('br').style.display = 'none'
    //调整底部翻页功能的样式
    let pageTurningBar = document.querySelectorAll('div#fanye1 > ul > li')
    for (let i = 0; i < pageTurningBar.length; i++) {
        pageTurningBar[i].style.cssText = 'background-color:#666666;border:none'
        pageTurningBar[i].querySelector('a').style.cssText = 'color:#cc9966;border-bottom:3px solid #cc9966;width:100px;padding-bottom:5px'
    }

    document.querySelector('#neirong > div.like').style.display = 'none'
    document.querySelector('div.footer').style.display = 'none'
    //}
})();

//显示当前章节前后的章节目录
/**
 * 
 * @param {string} bookID 书籍的ID
 * @example showChapters(705361)@https://www.biquge365.net/book/705361/
 * @example showChapters(705361)@https://www.biquge365.net/chapter/705361/31220348.html
 */
function showChapters(bookID) {

}

//显示最新章节目录
function showNewestChapters(bookID) {
}


