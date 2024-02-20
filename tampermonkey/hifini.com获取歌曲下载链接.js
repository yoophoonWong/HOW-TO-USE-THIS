// ==UserScript==
// @name         hifini.com歌曲助手
// @namespace    https://github.com/yoophoon
// @version      2024-02-16
// @description  获取
// @author       yoophoon
// @match        https://www.hifini.com/thread-*
// @icon         https:/www.hifini.com/view/img/logo.png
// @grant        none
// ==/UserScript==


/**
 * 网站改版了且响应速度很慢 搁置该脚本的编写
 */
(function () {
    'use strict';
    //窗体加载完成 执行的函数
    window.onload = function () {
        var getMusicURL = function (url) {
            var musicURL;
            var xhr = new XMLHttpRequest();
            //console.log(url);
            xhr.open('get', url, true);
            xhr.onload = function () {
                var status = xhr.status;
                if (status == 200) {
                    //document.querySelector("hr").outerText = xhr.responseURL; //在这个标签后面添加相应网址
                    //console.log(xhr.responseURL);
                    showInfoInPage(xhr.responseURL, document.querySelector('#player4'));
                } else if (status == 302) {
                    console.log(xhr.responseURL);
                } else {
                    alert("@@ERROR@@");
                }
            };
            xhr.send();
            xhr.onerror = function (e) {
                alert('存在混合资源，打开调试窗口查看文件链接');
            }
        };
        getMusicURL(ap4.audio.currentSrc);
        /**
         *
         * @param {str} text
         * @param {Node} targetEle
         */
        function showInfoInPage(text, targetEle) {
            let infoPanel = document.createElement('div');
            let downloadLink = document.createElement('p');
            downloadLink.id = 'downloadLink'
            downloadLink.style.cssText = 'user-select: text';
            //将下载链接显示出来
            downloadLink.innerText = text;
            //创建复制按钮
            let downloadLinkCopy = document.createElement('button');
            downloadLinkCopy.innerText = "复制下载链接"
            downloadLinkCopy.classList = 'btn btn-outline-secondary';
            downloadLinkCopy.style.cssText = ':inline-block;width:50%;box-sizing:border-box';
            //点击复制按钮
            downloadLinkCopy.addEventListener('click', e => {
                e.preventDefault();
                navigator.clipboard.writeText(downloadLink.innerText).then(
                    function () {
                        downloadLinkCopy.innerText = '成功复制下载链接';
                    }, function () {
                        alert('复制出现问题，请手动复制下载链接');
                    });
            })
            //下载文件功能
            let downloadFile = document.createElement('button');
            let musicInfo = document.querySelector('.aplayer-title').innerText + document.querySelector('.aplayer-author').innerText + text.match(/\.[a-zA-Z0-9]{3,4}(?=\?)/)
            downloadFile.innerText = '下载 ' + musicInfo;
            //跨域下载文件
            downloadFile.addEventListener('click', e => {
                alert('开始下载，不要重复点击下载按钮');
                fetch(text).then((res) => {
                    res.blob().then((blob) => {
                        const blobUrl = window.URL.createObjectURL(blob);
                        // 这里的文件名根据实际情况从响应头或者url里获取
                        const a = document.createElement('a');
                        a.href = blobUrl;
                        a.download = musicInfo;
                        a.click();
                        window.URL.revokeObjectURL(blobUrl);
                    });
                });
            })
            //downloadFile.href = text;
            //设置下载文件名歌曲名+歌手名+歌曲格式
            //downloadFile.download = musicInfo;

            downloadFile.classList = 'btn btn-outline-secondary';
            downloadFile.style.cssText = 'display:inline-block;width:50%;box-sizing:border-box'
            //压入以上元素
            infoPanel.appendChild(downloadLink);
            infoPanel.appendChild(downloadLinkCopy);
            infoPanel.appendChild(downloadFile);
            targetEle.appendChild(infoPanel);
        }
    }
    // Your code here...
})();