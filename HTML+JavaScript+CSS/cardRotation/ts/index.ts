interface Time {
    hours: string,
    minutes: string,
    seconds: string,
}
interface TimeEle {
    /*     hours1Top: HTMLElement,
        hours1Bottom: HTMLElement,
        hours2top: HTMLElement,
        hours2Bottom: HTMLElement,
        minutes1Top: HTMLElement,
        minutes1Bottom: HTMLElement,
        minutes2top: HTMLElement,
        minutes2Bottom: HTMLElement, */
    seconds2CurrentTop: HTMLElement,
    seconds2CurrentBottom: HTMLElement,
    seconds2NextTop: HTMLElement,
    seconds2NextBottom: HTMLElement,
}
function getTime(): Time {
    let currentTime = new Date()
    let time: Time = {
        hours: '00',
        minutes: '00',
        seconds: '00',
    }
    time.hours = currentTime.getHours() > 9 ? '' + currentTime.getHours() : '0' + currentTime.getHours()
    time.minutes = currentTime.getMinutes() > 9 ? '' + currentTime.getMinutes() : '0' + currentTime.getMinutes()
    time.seconds = currentTime.getSeconds() > 9 ? '' + currentTime.getSeconds() : '0' + currentTime.getSeconds()
    return time
}
function updateTime(time: Time) {
    let timeEle: TimeEle = {
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
    }

    setTextContent(timeEle, time)
    rotateTheNum(timeEle.seconds2CurrentTop, timeEle.seconds2CurrentBottom, timeEle.seconds2NextTop, timeEle.seconds2NextBottom)
}
function setTextContent(timeEle: TimeEle, time: Time) {
    timeEle.seconds2CurrentTop.textContent = time.seconds.charAt(1)
    timeEle.seconds2CurrentBottom.textContent = time.seconds.charAt(1)
    //console.log(parseInt(time.seconds.charAt(1)) + 1 > 9 ? 0 : parseInt(time.seconds.charAt(1)) + 1)
    timeEle.seconds2NextTop.textContent = '' + (parseInt(time.seconds.charAt(1)) + 1 > 9 ? 0 : parseInt(time.seconds.charAt(1)) + 1)
    timeEle.seconds2NextBottom.textContent = '' + (parseInt(time.seconds.charAt(1)) + 1 > 9 ? 0 : parseInt(time.seconds.charAt(1)) + 1)
}
//let updateHandle = setInterval()
function rotateTheNum(currentTop: HTMLElement, currentBottom: HTMLElement, nextTop: HTMLElement, nextBottom: HTMLElement) {
    //set perspective
    if (currentTop.parentNode == null) {
        console.log('can\'t set perspective')
    } else {
        //currentTop.parentElement.style.perspective = '300px'
    }

    currentTop.style.transform = 'rotate3d(1,0,0,-180deg)'
    currentBottom.style.zIndex = '-1'
    nextBottom.style.zIndex = '0'
    nextBottom.style.transform = 'rotate3d(1,0,0,0deg)'
    setTimeout(function () {
        //unset perspective
        currentTop.style.zIndex = '-1'
        currentTop.textContent = nextTop.textContent
        currentTop.style.transform = 'rotate3d(1,0,0,-0deg)'
        currentBottom.textContent = nextBottom.textContent
        currentBottom.style.zIndex = '0'
        nextBottom.style.zIndex = '-1'

    }, 600)
    setTimeout(function () {
        nextTop.style.zIndex = '-1'
        currentTop.style.zIndex = '0'
        nextBottom.style.transform = 'rotateX(180deg)'
    }, 900)
}

