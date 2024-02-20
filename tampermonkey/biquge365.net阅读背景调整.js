// ==UserScript==
// @name         biquge365.net阅读背景调整
// @namespace    https://github.com/yoophoon
// @copyright    2024, yoophoon (https://github.com/yoophoon)
// @version      2024-02-19
// @description  改善笔趣阁的阅读体验
// @icon         https://www.biquge365.net/style/favicon.ico
// @grant        unsafeWindow
// @grant        GM_addStyle
// @author       yoophoon
// @homepage     https://github.com/yoophoon
// @match        https://www.biquge365.net/chapter/*
// @run-at document-end
// @updateURL    https://raw.githubusercontent.com/yoophoon/HOW-TO-USE-THIS/main/tampermonkey/biquge365.net%E9%98%85%E8%AF%BB%E8%83%8C%E6%99%AF%E8%B0%83%E6%95%B4.js
// @downloadURL  https://raw.githubusercontent.com/yoophoon/HOW-TO-USE-THIS/main/tampermonkey/biquge365.net%E9%98%85%E8%AF%BB%E8%83%8C%E6%99%AF%E8%B0%83%E6%95%B4.js
// @license      MIT
// ==/UserScript==


(function () {
    //GM_addStyle对脚本无效单纯插入一段CSS验证该函数的功能性
    GM_addStyle(".uselessStyle,.usefulStyle{height:150px !important}")
    setUserCSS('userCSS')
    //window.onload = function () {
    //隐藏功能菜单
    document.querySelector('header.head').style.display = 'none'
    //隐藏报错按钮 底部和底部都有这种功能用for循环处理掉
    let errorBar = document.querySelectorAll('.baocuo')
    for (let i = 0; i < errorBar.length; i++) {
        errorBar[i].style.display = 'none'
    }

    //隐藏顶部功能菜单
    //调整字号、关灯功能
    document.querySelector('#neirong > div.gongneng1').style.display = 'none'
    //章节目录功能
    document.querySelector('div#fanye').style.display = 'none'
    //文字广告
    document.querySelector('#txt > p').style.display = 'none'


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

    //隐藏底部功能
    //推荐内容
    document.querySelector('#neirong > div.like').style.display = 'none'
    //页脚内容
    document.querySelector('div.footer').style.display = 'none'

    //创建侧栏显示最一定数量的最新章节和当前章节的前后章节
    let sideBar = document.createElement('ul')

    sideBar.style.cssText = 'width:250px;position:fixed;top:20%;left:calc(50% - 720px);box-sizing:border-box'

    //给侧栏添加全文目录按钮

    //设置鼠标进入退出效果
    sideBar.onmouseenter = function () {
        sideBar.style.backgroundColor = '#666666'
        sideBar.style.border = '2px solid #999999'
    }
    sideBar.onmouseleave = function () {
        sideBar.style.backgroundColor = ''
    }

    let bookID = document.location.href.split('/')[4]
    //设置侧栏目录
    let directory = document.createElement('a')
    directory.style.cssText = 'color:#cc9966;font-size:25px;padding-bottom:5px;display:block;text-align:center'
    directory.href = `https://www.biquge365.net/newbook/${bookID}/`
    directory.innerText = '全部章节'
    sideBar.appendChild(directory)
    document.body.appendChild(sideBar)
    getChaptersInfo(bookID, document.location.href, sideBar, 5)
    //}
})();


/**
 * 
 * @param {string} bookID 网站的书籍标识
 * @param {string} currentChapter 当前章节标识
 * @param {Node} parentNode 挂载的元素节点
 * @param {number} nodeNum 需要挂载的数量
 */
function getChaptersInfo(bookID, currentChapter, parentNode, nodeNum) {
    const chaptersURL = `https://www.biquge365.net/newbook/${bookID}/`
    const parser = new DOMParser()
    const currentChapterStyle = {
        li: 'width:100%;margin:2px;margin-left:4px',
        a: 'color:#cc9966;border-bottom:1px solid #cc9966;padding:1px;padding-left:10px;border-left:4px solid #666666;margin-left:8px'
    }
    const otherChaptersStyle = {
        li: 'width:100%;margin:2px',
        a: 'color:#cc9966;padding:1px;padding-left:10px;border-left:2px solid #666666'
    }
    fetch(chaptersURL)
        .then(response => response.text())
        .then(resText => {
            //将获取的文本转换成了DOM对象
            let chapterPage = parser.parseFromString(resText, 'text/html')
            //处理最新章节
            let newestChapters = chapterPage.querySelectorAll(" ul.xinchapter > li")
            for (let i = 0; i < (newestChapters.length > nodeNum ? nodeNum : newestChapters.length); i++) {
                parentNode.appendChild(newestChapters[i])
                if (i == ((newestChapters.length = nodeNum ? nodeNum : newestChapters.length) - 1)) {
                    let hrIndirectory = document.createElement('hr')
                    //hrIndirectory.style.cssText = 'background-color:#999444;height:1px;border:none'
                    parentNode.appendChild(hrIndirectory)
                }
                setStyle(newestChapters[i], currentChapter, currentChapterStyle, otherChaptersStyle)
            }
            //处理前后章节
            let currentChapters = chapterPage.querySelectorAll(" ul.info > li")
            let maxNumChapters = currentChapters.length
            //console.log(currentChapters.length)
            if (maxNumChapters <= nodeNum) {
                return
            }
            //console.log(currentChapters.length - nodeNum)
            //外循环确定当前章节在全文位置
            for (let i = maxNumChapters - 1; i >= 0; i--) {
                if (currentChapters[i].querySelector('a').href == currentChapter) {
                    //内循环定位
                    let j
                    //判断前后章节的最新章和全文最新章的位置关系 取小值 如果是相等则取等值减一防止元素重复
                    if ((i + parseInt(nodeNum / 2)) > (maxNumChapters - nodeNum)) { j = maxNumChapters - nodeNum - 1 }
                    if ((i + parseInt(nodeNum / 2)) < (maxNumChapters - nodeNum)) { j = i + parseInt(nodeNum / 2) }
                    if ((i + parseInt(nodeNum / 2)) == (maxNumChapters - nodeNum)) { j = i + parseInt(nodeNum / 2) - 1 }
                    console.log(j)
                    for (; j >= (0 > (i - parseInt(nodeNum / 2)) ? 0 : (i - parseInt(nodeNum / 2))); j--) {
                        parentNode.appendChild(currentChapters[j])
                        setStyle(currentChapters[j], currentChapter, currentChapterStyle, otherChaptersStyle)
                    }
                    return
                }
            }
        })
}
/**
 * 
 * @param {*} Node 操作节点
 * @param {string} currentChapter 当前章节信息
 * @param {*} currentStyle 当前章节样式
 * @param {*} otherStyle 其他章节样式
 */
function setStyle(Node, currentChapter, currentStyle, otherStyle) {
    Node.style.cssText = otherStyle.li
    let chapterInfo = Node.querySelector('a')
    chapterInfo.style.cssText = otherStyle.a
    //如果是最新章节的处理
    if (currentChapter == chapterInfo.href) {
        Node.style.cssText = currentStyle.li
        chapterInfo.style.cssText = currentStyle.a
        chapterInfo.href = '#'
    }
    Node.onmouseenter = function () {
        Node.style.cssText = currentStyle.li
    }
    Node.onmouseleave = function () {
        Node.style.cssText = otherStyle.li
    }
}

/**
 * 
 * @param {string} userCSS 用户样式表
 * @link https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule#function_to_add_a_stylesheet_rule
 * @description 将用户样式表插入到DOM对象中通过sheet属性生效，无法直接在开发者工具->元素（HTML）中直接查看
 */
function setUserCSS(userCSS) {
    let styleEl = document.createElement('style')
    document.head.appendChild(styleEl)
    //类似documen.style.cssText
    //userCSS.sheet.addRule('.userCSS::after', 'color:green')
    styleEl.sheet.insertRule(`hr{
        border: none;
        border-top: 2px double #cc9966;
        color:#333;
        overflow: visible;
        text-align: center;
        height: 2px;
        margin-top:11px;
        margin-bottom:8px;
    }`)
    styleEl.sheet.insertRule(`hr::after {color:#666666;background-color: #cc9966;content:'最新章节↑§↓最近章节';padding:0 4px;position:relative;font-size:12px;top:-13px;border-radius:6px}`)
}

