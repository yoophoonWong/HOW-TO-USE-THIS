interface Time {
    hours: string,
    minutes: string,
    seconds: string,
}
interface TimeEle {
    hours1Top: object,
    hours1Bottom: object,
    hours2top: object,
    hours2Bottom: object,
    minutes1Top: object,
    minutes1Bottom: object,
    minutes2top: object,
    minutes2Bottom: object,
    seconds1Top: object,
    seconds1Bottom: object,
    seconds2top: object,
    seconds2Bottom: object,
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
    let timeEle: TimeEle
    timeEle.hours1Top = document.querySelector('.hours1 .current.top')
}
//let updateHandle = setInterval()