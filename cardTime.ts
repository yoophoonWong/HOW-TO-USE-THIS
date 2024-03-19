interface cardTimeConf {
    fontsize: number,
    centerLine: boolean,
    centerLineColor: string,
    outLineColor: string,
    foregroundColor: string,
    backgroundColor: string,
    lineGap: number,
}
interface Time {
    hours: string,
    minutes: string,
    seconds: string,
}
interface TimeEle {
    hours1: HTMLElement,
    hours1CurrentTop: HTMLElement,
    hours1CurrentBottom: HTMLElement,
    hours1NextTop: HTMLElement,
    hours1NextBottom: HTMLElement,
    hours2: HTMLElement,
    hours2CurrentTop: HTMLElement,
    hours2CurrentBottom: HTMLElement,
    hours2NextTop: HTMLElement,
    hours2NextBottom: HTMLElement,
    seperationHM: HTMLElement,
    seperationHMTop: HTMLElement,
    seperationHMBottom: HTMLElement,
    minutes1: HTMLElement,
    minutes1CurrentTop: HTMLElement,
    minutes1CurrentBottom: HTMLElement,
    minutes1NextTop: HTMLElement,
    minutes1NextBottom: HTMLElement,
    minutes2: HTMLElement,
    minutes2CurrentTop: HTMLElement,
    minutes2CurrentBottom: HTMLElement,
    minutes2NextTop: HTMLElement,
    minutes2NextBottom: HTMLElement,
    seperationMS: HTMLElement,
    seperationMSTop: HTMLElement,
    seperationMSBottom: HTMLElement,
    seconds1: HTMLElement,
    seconds1CurrentTop: HTMLElement,
    seconds1CurrentBottom: HTMLElement,
    seconds1NextTop: HTMLElement,
    seconds1NextBottom: HTMLElement,
    seconds2: HTMLElement,
    seconds2CurrentTop: HTMLElement,
    seconds2CurrentBottom: HTMLElement,
    seconds2NextTop: HTMLElement,
    seconds2NextBottom: HTMLElement,
    getTimeNumCantainers: Function,
    getTimeNumCurrentTops: Function,
    getTimeNumCurrentBottoms: Function,
    getTimeNumNextTops: Function,
    getTimeNumNextBottoms: Function,
    getTimeNumCurrents: Function,
    getTimeNumNexts: Function,
    getTimeNumTops: Function,
    getTimeNumBottoms: Function,
    getTimeNumAll: Function,
    getTimeSeperations: Function,
    getTimeSeperationInners: Function,
}
export class cardTime {
    timeEle: TimeEle
    cardTimeConf: cardTimeConf = {
        fontsize: 400,
        centerLine: true,
        centerLineColor: '#990066',
        outLineColor: '#990066',
        foregroundColor: '#999966',
        backgroundColor: '#333333',
        lineGap: 20,
    }

    constructor(mountEle: HTMLElement, config: cardTimeConf) {
        this.timeEle = this.createTimeEle()
        //this.cardTimeConf = config
        this.setTimeNumStyle(this.timeEle, this.cardTimeConf)
        setInterval(() => this.setTimeNum(this.timeEle, this.getTime()), 1000)

        this.appendCardTime(this.timeEle, mountEle)
    }

    /**
     * 
     * @returns a collection of cardTime elements
     * @description create elements for display cardTime
     */
    createTimeEle(): TimeEle {
        let timeEle: TimeEle = {
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
            seperationHMTop: document.createElement('div'),
            seperationHMBottom: document.createElement('div'),
            seperationMS: document.createElement('div'),
            seperationMSTop: document.createElement('div'),
            seperationMSBottom: document.createElement('div'),
            getTimeNumCantainers: function () {
                return [timeEle.hours1, timeEle.hours2, timeEle.minutes1, timeEle.minutes2, timeEle.seconds1, timeEle.seconds2]
            },
            getTimeNumCurrentTops: function () {
                return [timeEle.hours1CurrentTop, timeEle.hours2CurrentTop, timeEle.minutes1CurrentTop, timeEle.minutes2CurrentTop, timeEle.seconds1CurrentTop, timeEle.seconds2CurrentTop]
            },
            getTimeNumCurrentBottoms: function () {
                return [timeEle.hours1CurrentBottom, timeEle.hours2CurrentBottom, timeEle.minutes1CurrentBottom, timeEle.minutes2CurrentBottom, timeEle.seconds1CurrentBottom, timeEle.seconds2CurrentBottom]
            },
            getTimeNumNextTops: function () {
                return [timeEle.hours1NextTop, timeEle.hours2NextTop, timeEle.minutes1NextTop, timeEle.minutes2NextTop, timeEle.seconds1NextTop, timeEle.seconds2NextTop]
            },
            getTimeNumNextBottoms: function () {
                return [timeEle.hours1NextBottom, timeEle.hours2NextBottom, timeEle.minutes1NextBottom, timeEle.minutes2NextBottom, timeEle.seconds1NextBottom, timeEle.seconds2NextBottom]
            },
            getTimeNumCurrents: function () {
                return [...timeEle.getTimeNumCurrentTops(), ...timeEle.getTimeNumCurrentBottoms()]
            },
            getTimeNumNexts: function () {
                return [...timeEle.getTimeNumNextTops(), ...timeEle.getTimeNumNextBottoms()]
            },
            getTimeNumTops: function () {
                return [...timeEle.getTimeNumCurrentTops(), ...timeEle.getTimeNumNextTops()]
            },
            getTimeNumBottoms: function () {
                return [...timeEle.getTimeNumCurrentBottoms(), ...timeEle.getTimeNumNextBottoms()]
            },
            getTimeNumAll: function () {
                return [...timeEle.getTimeNumCurrentTops(), ...timeEle.getTimeNumCurrentBottoms(), ...timeEle.getTimeNumNextTops(), ...timeEle.getTimeNumNextBottoms()]
            },
            getTimeSeperations: function () {
                return [timeEle.seperationHM, timeEle.seperationMS]
            },
            getTimeSeperationInners: function () {
                return [timeEle.seperationHMTop, timeEle.seperationHMBottom, timeEle.seperationMSTop, timeEle.seperationMSBottom,]
            },
        }
        //create node tree
        timeEle.hours1.append(timeEle.hours1NextTop, timeEle.hours1CurrentTop, timeEle.hours1CurrentBottom, timeEle.hours1NextBottom)
        timeEle.hours2.append(timeEle.hours2NextTop, timeEle.hours2CurrentTop, timeEle.hours2CurrentBottom, timeEle.hours2NextBottom)
        timeEle.minutes1.append(timeEle.minutes1NextTop, timeEle.minutes1CurrentTop, timeEle.minutes1CurrentBottom, timeEle.minutes1NextBottom)
        timeEle.minutes2.append(timeEle.minutes2NextTop, timeEle.minutes2CurrentTop, timeEle.minutes2CurrentBottom, timeEle.minutes2NextBottom)
        timeEle.seconds1.append(timeEle.seconds1NextTop, timeEle.seconds1CurrentTop, timeEle.seconds1CurrentBottom, timeEle.seconds1NextBottom)
        timeEle.seconds2.append(timeEle.seconds2NextTop, timeEle.seconds2CurrentTop, timeEle.seconds2CurrentBottom, timeEle.seconds2NextBottom)
        timeEle.seperationHM.append(timeEle.seperationHMTop, document.createElement('br'), timeEle.seperationHMBottom)
        timeEle.seperationMS.append(timeEle.seperationMSTop, document.createElement('br'), timeEle.seperationMSBottom)
        return timeEle
    }
    /**
     * 
     * @param timeEle set the style of cardTime elements
     */
    setTimeNumStyle(timeEle: TimeEle, cardTimeConf: cardTimeConf) {
        //categorize those cardTime elements
        let timeNumCantainers = timeEle.getTimeNumCantainers()
        let timeNumCurrentTops = timeEle.getTimeNumCurrentTops()
        let timeNumCurrentBottoms = timeEle.getTimeNumCurrentBottoms()
        let timeNumNextTops = timeEle.getTimeNumNextTops()
        let timeNumNextBottoms = timeEle.getTimeNumNextBottoms()
        let timeNumCurrents = timeEle.getTimeNumCurrents()
        let timeNumNexts = timeEle.getTimeNumNexts()
        let timeNumTops = timeEle.getTimeNumTops()
        let timeNumBottoms = timeEle.getTimeNumBottoms()
        let timeNumAll = timeEle.getTimeNumAll()
        let timeSeperations = timeEle.getTimeSeperations()
        let timeSeperationInners = timeEle.getTimeSeperationInners()
        //set timeNum
        let allCardTimeEle = [...timeNumCantainers, ...timeNumAll, ...timeSeperations, ...timeSeperationInners]
        for (let i = 0; i < allCardTimeEle.length; i++) {
            allCardTimeEle[i].style.cssText = `font-size:${cardTimeConf.fontsize}px;
                line-height:${cardTimeConf.fontsize}px;
                text-align:center;
                width:${(cardTimeConf.fontsize * 0.618).toFixed()}px;
                height:${cardTimeConf.fontsize.toFixed()}px;
                overflow:hidden;
                display:inline-block;
                position:relative;`
        }
        //set timeSeperations style
        this.setStyle(timeSeperations, [['width', `${(cardTimeConf.fontsize * 0.15).toFixed()}px`],
        ['line-height', `${(cardTimeConf.fontsize * 0.2).toFixed()}px`]])
        this.setStyle(timeSeperationInners, [['width', `${(cardTimeConf.fontsize * 0.12).toFixed()}px`],
        ['height', `${(cardTimeConf.fontsize * 0.12).toFixed()}px`],
        ['margin-bottom', `${(cardTimeConf.fontsize * 0.15).toFixed()}px`],
        ['border-radius', '50%'],
        ['background-color', `${cardTimeConf.foregroundColor}`]])
        //set timeNumCantainers style
        this.setStyle(timeNumCantainers, [['border', `1px solid ${cardTimeConf.outLineColor}`],
        ['margin', `0px ${cardTimeConf.lineGap}px`],
        ['overflow', ''],
        ['perspective', `${cardTimeConf.fontsize * 5}px`]])
        //if centerLine declare as true
        if (cardTimeConf.centerLine == true) {
            for (let i = 0; i < timeNumCantainers.length; i++) {
                timeNumCantainers[i].classList.add('cardTimeNum')
            }
            let centerLineStyle = document.createElement('style')
            centerLineStyle.textContent = `.cardTimeNum::after{
                content:'';
                width:${(cardTimeConf.fontsize * 0.618).toFixed()}px;
                position:absolute;
                top:50%;
                left:0px;
                border:1px solid ${cardTimeConf.centerLineColor};
                border-left:none;
                border-right:none;
                z-index:10;
            }`
            document.head.appendChild(centerLineStyle)
        }
        //set timeNumAll style
        this.setStyle(timeNumAll,
            [['height', '50%'],
            ['position', 'absolute'],
            ['display', 'block'],
            ['color', cardTimeConf.foregroundColor],
            ['background-color', cardTimeConf.backgroundColor],
            ['transform-origin', 'center bottom'],
            ['backface-visibility', 'hidden'],
            ['transition', '0.6s'],])
        //set timeNumBottoms style
        this.setStyle(timeNumBottoms,
            [['line-height', '0px'],
            ['top', '50%'],
            ['transform-origin', 'center top'],])
        //set timeNumNexts style
        // this.setStyle(timeNumNexts, [['color', cardTimeConf.backgroundColor],
        // ['background-color', cardTimeConf.foregroundColor],])
    }
    /**
     * 
     * @param timeEle elements for setting style
     * @param styles style list
     */
    setStyle(timeEle: HTMLElement[], styles: string[][]) {
        for (let i = 0; i < timeEle.length; i++) {
            for (let j = 0; j < styles.length; j++) {
                timeEle[i].style.setProperty(styles[j][0], styles[j][1])
            }
        }
    }
    getTime(): Time {
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

    //TODO just for temp
    setTimeNum(timeEle: TimeEle, timeNum: Time) {
        let timeNumCantainers = timeEle.getTimeNumCantainers()
        let timeNumCurrentTops = timeEle.getTimeNumCurrentTops()
        let timeNumCurrentBottoms = timeEle.getTimeNumCurrentBottoms()
        let timeNumNextTops = timeEle.getTimeNumNextTops()
        let timeNumNextBottoms = timeEle.getTimeNumNextBottoms()
        let timeNumStr = timeNum.hours + timeNum.minutes + timeNum.seconds
        for (let i = 0; i < timeNumCantainers.length; i++) {
            if (timeNumNextTops[i].textContent != timeNumStr.charAt(i)) {
                //console.log(`${timeNumCurrentTops[i].textContent}+${i}+${timeNumStr}`)
                timeNumCurrentTops[i].textContent = '' + (parseInt(timeNumStr.charAt(i)) - 1 >= 0 ? parseInt(timeNumStr.charAt(i)) - 1 : 9)
                timeNumCurrentBottoms[i].textContent = '' + (parseInt(timeNumStr.charAt(i)) - 1 >= 0 ? parseInt(timeNumStr.charAt(i)) - 1 : 9)
                timeNumNextTops[i].textContent = timeNumStr.charAt(i)
                timeNumNextBottoms[i].textContent = timeNumStr.charAt(i)
                this.rotateTheNum(timeNumCantainers[i], timeNumCurrentTops[i], timeNumCurrentBottoms[i], timeNumNextTops[i], timeNumNextBottoms[i])
            }
        }
    }
    rotateTheNum(cantainer: HTMLElement, currentTop: HTMLElement, currentBottom: HTMLElement, nextTop: HTMLElement, nextBottom: HTMLElement) {
        currentTop.style.setProperty('transition', '0.6s')
        currentTop.style.transform = `rotateX(-${360 * parseInt(nextTop.textContent || '0')}deg)`
        currentTop.ontransitionstart = function (e) {
            setTimeout(function () {
                currentTop.textContent = nextTop.textContent
                currentTop.style.setProperty('transition', '')
            }, 200)
        }
        nextBottom.style.setProperty('transition', '0.6s')
        nextBottom.style.transform = `rotateX(-${360 * parseInt(nextTop.textContent || '0')}deg)`
        // nextBottom.ontransitionstart = function (e) {
        //     setTimeout(function () {
        //         nextBottom.style.setProperty('transition', '')
        //         if (nextTop.textContent == '9') {
        //             nextTop.style.transform = `rotateX(180deg)`
        //         } else (
        //             nextBottom.style.transform = `rotateX(-${360 * parseInt(nextTop.textContent || '0') - 180}deg)`
        //         )
        //         console.log(nextBottom.style.getPropertyValue('transform'))
        //     }, 200)
        // }
        //cantainer.style.setProperty('pespertive', '')
        /*         currentTop.style.transform = 'rotateX(-180deg)'
                nextBottom.style.transform = 'rotateX(0deg)'
                currentBottom.style.zIndex = '-1'
                nextBottom.style.zIndex = '0' */
    }
    /**
     * 
     * @param timeEle cardTime elements for display time
     * @param mountEle element mounted by cardTime element
     * @description insert the cardTime into the page
     */
    appendCardTime(timeEle: TimeEle, mountEle: HTMLElement) {
        const fragment = new DocumentFragment()
        //HH:MM:SS
        fragment.append(timeEle.hours1, timeEle.hours2, timeEle.seperationHM, timeEle.minutes1, timeEle.minutes2, timeEle.seperationMS, timeEle.seconds1, timeEle.seconds2)
        if (mountEle.children.length > 0) {
            alert('the element used for mounting cardTime should have no child!')
        } else {
            mountEle.appendChild(fragment)
        }
    }
}


