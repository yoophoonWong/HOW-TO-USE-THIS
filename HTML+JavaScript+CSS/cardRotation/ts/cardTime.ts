interface cardTimeConf {
    fontsize: string,
}
interface Time {
    hours: string,
    minutes: string,
    seconds: string,
}
// interface TimeEle {
//     hours1: HTMLElement,
//     hours1CurrentTop: HTMLElement,
//     hours1CurrentBottom: HTMLElement,
//     hours1NextTop: HTMLElement,
//     hours1NextBottom: HTMLElement,
//     hours2: HTMLElement,
//     hours2CurrentTop: HTMLElement,
//     hours2CurrentBottom: HTMLElement,
//     hours2NextTop: HTMLElement,
//     hours2NextBottom: HTMLElement,
//     seperationHM: HTMLElement,
//     minutes1: HTMLElement,
//     minutes1CurrentTop: HTMLElement,
//     minutes1CurrentBottom: HTMLElement,
//     minutes1NextTop: HTMLElement,
//     minutes1NextBottom: HTMLElement,
//     minutes2: HTMLElement,
//     minutes2CurrentTop: HTMLElement,
//     minutes2CurrentBottom: HTMLElement,
//     minutes2NextTop: HTMLElement,
//     minutes2NextBottom: HTMLElement,
//     seperationMS: HTMLElement,
//     seconds1: HTMLElement,
//     seconds1CurrentTop: HTMLElement,
//     seconds1CurrentBottom: HTMLElement,
//     seconds1NextTop: HTMLElement,
//     seconds1NextBottom: HTMLElement,
//     seconds2: HTMLElement,
//     seconds2CurrentTop: HTMLElement,
//     seconds2CurrentBottom: HTMLElement,
//     seconds2NextTop: HTMLElement,
//     seconds2NextBottom: HTMLElement,
// }
class cardTime {
    timeEle: TimeEle

    constructor(mountEle: HTMLElement, config: cardTimeConf) {
        this.timeEle = this.createTimeEle()

    }
    createTimeEle() {
        return {
            hours1: document.createElement('div'),
            hours1CurrentTop: document.createElement('div'),
            hours1CurrentBottom: document.createElement('div'),
            hours1NextTop: document.createElement('div'),
            hours1NextBottom: document.createElement('div'),
            hours2: document.createElement('div'),
            hours2CurrentTop: document.createElement('div'),
            hours2CurrentBottom: document.createElement('div'),
            hours2NextTop: document.createElement('div'),
            hours2NextBottom: document.createElement('div'),
            minutes1: document.createElement('div'),
            minutes1CurrentTop: document.createElement('div'),
            minutes1CurrentBottom: document.createElement('div'),
            minutes1NextTop: document.createElement('div'),
            minutes1NextBottom: document.createElement('div'),
            minutes2: document.createElement('div'),
            minutes2CurrentTop: document.createElement('div'),
            minutes2CurrentBottom: document.createElement('div'),
            minutes2NextTop: document.createElement('div'),
            minutes2NextBottom: document.createElement('div'),
            seconds1: document.createElement('div'),
            seconds1CurrentTop: document.createElement('div'),
            seconds1CurrentBottom: document.createElement('div'),
            seconds1NextTop: document.createElement('div'),
            seconds1NextBottom: document.createElement('div'),
            seconds2: document.createElement('div'),
            seconds2CurrentTop: document.createElement('div'),
            seconds2CurrentBottom: document.createElement('div'),
            seconds2NextTop: document.createElement('div'),
            seconds2NextBottom: document.createElement('div'),
            seperationHM: document.createElement('div'),
            seperationMS: document.createElement('div'),
        }
    }
}


