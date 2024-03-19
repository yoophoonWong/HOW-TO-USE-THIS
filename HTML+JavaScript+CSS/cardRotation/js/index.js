"use strict";
function getTime() {
    let currentTime = new Date();
    let time = {
        hours: '00',
        minutes: '00',
        seconds: '00',
    };
    time.hours = currentTime.getHours() > 9 ? '' + currentTime.getHours() : '0' + currentTime.getHours();
    time.minutes = currentTime.getMinutes() > 9 ? '' + currentTime.getMinutes() : '0' + currentTime.getMinutes();
    time.seconds = currentTime.getSeconds() > 9 ? '' + currentTime.getSeconds() : '0' + currentTime.getSeconds();
    return time;
}
function updateTime(time) {
    let timeEle = {
        /*      hours1Top: document.querySelector('.hours1 .current.top'),
                hours1Bottom: document.querySelector('.hours1 .current.bottom'),
                hours2top: document.querySelector('.hours2 .current.top'),
                hours2Bottom: document.querySelector('.hours2 .current.bottom'),
                minutes1Top: document.querySelector('.minutes1 .current.top'),
                minutes1Bottom: document.querySelector('.minutes1 .current.bottom'),
                minutes2top: document.querySelector('.minutes2 .current.top'),
                minutes2Bottom: document.querySelector('.minutes2 .current.bottom'), */
        seconds2CurrentTop: document.querySelector('.seconds2 .current.top') || document.createElement('div'),
        seconds2CurrentBottom: document.querySelector('.seconds2 .current.bottom') || document.createElement('div'),
        seconds2NextTop: document.querySelector('.seconds2 .next.top') || document.createElement('div'),
        seconds2NextBottom: document.querySelector('.seconds2 .next.bottom') || document.createElement('div'),
    };
    setTextContent(timeEle, time);
    rotateTheNum(timeEle.seconds2CurrentTop, timeEle.seconds2CurrentBottom, timeEle.seconds2NextTop, timeEle.seconds2NextBottom);
}
function setTextContent(timeEle, time) {
    timeEle.seconds2CurrentTop.textContent = time.seconds.charAt(1);
    timeEle.seconds2CurrentBottom.textContent = time.seconds.charAt(1);
    //console.log(parseInt(time.seconds.charAt(1)) + 1 > 9 ? 0 : parseInt(time.seconds.charAt(1)) + 1)
    timeEle.seconds2NextTop.textContent = '' + (parseInt(time.seconds.charAt(1)) + 1 > 9 ? 0 : parseInt(time.seconds.charAt(1)) + 1);
    timeEle.seconds2NextBottom.textContent = '' + (parseInt(time.seconds.charAt(1)) + 1 > 9 ? 0 : parseInt(time.seconds.charAt(1)) + 1);
}
//let updateHandle = setInterval()
function rotateTheNum(currentTop, currentBottom, nextTop, nextBottom) {
    currentTop.style.transform = 'rotate3d(1,0,0,-180deg)';
    currentBottom.style.zIndex = '-1';
    nextBottom.style.zIndex = '0';
    nextBottom.style.transform = 'rotate3d(1,0,0,0deg)';
    setTimeout(function () {
        currentTop.style.zIndex = '-1';
        currentTop.textContent = nextTop.textContent;
        currentTop.style.transform = 'rotate3d(1,0,0,-0deg)';
        currentBottom.textContent = nextBottom.textContent;
        currentBottom.style.zIndex = '0';
        nextBottom.style.zIndex = '-1';
    }, 600);
    setTimeout(function () {
        nextTop.style.zIndex = '-1';
        currentTop.style.zIndex = '0';
        nextBottom.style.transform = 'rotateX(180deg)';
    }, 900);
}
