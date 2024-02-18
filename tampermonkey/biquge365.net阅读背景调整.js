// ==UserScript==
// @name         biquge365.net阅读背景调整
// @namespace    http://tampermonkey.net/
// @version      2024-02-16

// @updateURL    https://raw.githubusercontent.com/yoophoon/HOW-TO-USE-THIS/main/tampermonkey/biquge365.net%E9%98%85%E8%AF%BB%E8%83%8C%E6%99%AF%E8%B0%83%E6%95%B4.js
// @downloadURL  https://raw.githubusercontent.com/yoophoon/HOW-TO-USE-THIS/main/tampermonkey/biquge365.net%E9%98%85%E8%AF%BB%E8%83%8C%E6%99%AF%E8%B0%83%E6%95%B4.js
// @description  try to take over the world!
// @author       You
// @match        https://www.biquge365.net/chapter/*
// @icon         https://www.biquge365.net/style/favicon.ico
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
    content.style.cssText = 'font-family: "microsoft yahei";color:#cc9966;background-color:#666666;border:none;margin-bottom:20px;box-sizing:border-box'
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

    //创建侧栏显示最一定数量的最新章节和当前章节的前后章节
    let sideBar = document.createElement('ul')

    sideBar.style.cssText = 'width:250px;position:fixed;top:20%;left:calc(50% - 720px);'
    //给侧栏添加全文目录按钮

    //设置鼠标进入退出效果
    sideBar.onmouseenter = function () { }
    sideBar.onmouseleave = function () { }

    document.body.appendChild(sideBar)

    let bookID = document.location.href.split('/')[4]
    let newestChaptersSelector = 'body > div.menu > div.right > div > ul > li'
    let newestChaptersType = `https://www.biquge365.net/book/${bookID}/`
    let chaptersSelector = 'ul.info > li'
    let chaptersType = `https://www.biquge365.net/newbook/${bookID}/`
    let numOfCurrentChapter = getTheNumber(document.querySelector('#neirong > h1').innerText)
    showChapters(5, sideBar, numOfCurrentChapter, newestChaptersType, newestChaptersSelector)
    showChapters(5, sideBar, numOfCurrentChapter, chaptersType, chaptersSelector)
    //}
})();


/**
 * 
 * @param {number} numberOfChapters 显示章节数量，显示当前章节前后目录时建议给奇数
 * @param {*} parentNode 要挂载的元素
 * @param {number} currentChapter 当前阅读小说第几章
 * @param {string} chapterType 是显示最新章节还是前后章节
 * @param {string} chapterSelector 章节选择器
 */
function showChapters(numberOfChapters, parentNode, currentChapter, chapterType, chapterSelector) {
    fetch(chapterType).then(function (response) {
        const parser = new DOMParser()
        let res = response.text()
        res.then(resText => {
            let newestChaptersPage = parser.parseFromString(resText, 'text/html')
            //body > div.menu > div.right > div:nth-child(2) > ul > li:nth-child(1)
            let newestChapters = newestChaptersPage.querySelectorAll(chapterSelector)
            //let theFinalChapter = getTheNumber(newestChapters[0].querySelector('a').innerText)
            if (chapterType.split('/')[3] == 'book') {
                for (let i = 0; i < (numberOfChapters < newestChapters.length ? numberOfChapters : newestChapters.length); i++) {
                    newestChapters[i].style.cssText = 'padding:1px;padding-left:10px;border-left:2px solid #666666;margin:2px'
                    newestChapters[i].querySelector('a').style.cssText = 'color:#cc9966'
                    parentNode.appendChild(newestChapters[i])
                    if (getTheNumber(newestChapters[i].querySelector('a').innerText) == currentChapter) {
                        newestChapters[i].style.cssText = 'padding:1px;padding-left:10px;border-left:4px solid #666666;margin:2px'
                        newestChapters[i].querySelector('a').style.cssText = 'color:#cc9966;border-bottom:1px solid #cc9966'
                    }
                }
            } else if (chapterType.split('/')[3] == 'newbook' && newestChapters.length - currentChapter >= (numberOfChapters + 1) / 2) {
                console.log('至少还有5章')
                for (let i = Math.min(currentChapter + parseInt(numberOfChapters / 2), newestChapters.length - numberOfChapters) - 1;
                    i >= (0 > currentChapter - parseInt(numberOfChapters / 2) ? 0 : currentChapter - parseInt(numberOfChapters / 2) - 2); i--) {
                    newestChapters[i].style.cssText = 'padding:1px;padding-left:10px;border-left:2px solid #666666;margin:2px'
                    newestChapters[i].querySelector('a').style.cssText = 'color:#cc9966'
                    parentNode.appendChild(newestChapters[i])
                    if (getTheNumber(newestChapters[i].querySelector('a').innerText) == currentChapter) {
                        newestChapters[i].style.cssText = 'padding:1px;padding-left:10px;border-left:4px solid #666666;margin:2px'
                        newestChapters[i].querySelector('a').style.cssText = 'color:#cc9966;border-bottom:1px solid #cc9966'
                    }
                }
            }
        })
        //let resHtml = parser.parseFromString(res, 'text/html')
        //console.log(resHtml)
    })
}

/**
 * 
 * @param {string} innerText 包含章节数字的字符串
 * @returns {number} 当前阅读章节数字
 */
function getTheNumber(innerText) {
    return innerText.split('第')[1].split('章')[0] * 1
}