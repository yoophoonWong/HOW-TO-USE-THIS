export class charInCharacters {
    constructor(showPanel, devSetting) {
        this.showPanel = showPanel
        this.devSetting = devSetting
        this.dCC = document.createElement('canvas')
        this.cGC = this.dCC.getContext('2d')
        this.characterData = []
        this.characterFont = []
        this.fontWidth = -1
    }

    renderCharacters(devSetting) {
        this.characterData = []
        this.characterFont = new Array(devSetting['font-size'] + devSetting['outSize'])
        this.fontWidth = -1
        this.devSetting = devSetting
        this.showPanel.innerHTML = ''
        console.log(this.devSetting.oValue)
        for (let charIndex = 0; charIndex < this.devSetting.oValue.length; charIndex++) {

            console.log('here in render')
            this.#getCharacterData(this.devSetting.oValue.charAt(charIndex))
            this.#generateFont(charIndex)
        }
        this.showPanel.innerHTML = this.characterFont.join('\n')
        console.log(this.characterFont.join(''))
    }
    #getCharacterData(character) {
        this.cGC.font = `${this.devSetting['font-weight']} ${this.devSetting['font-size']}px ${this.devSetting['font-family']}`

        this.cGC.fillStyle = this.devSetting.fillStyle
        this.cGC.textBaseline = this.devSetting.textBaseline
        this.cGC.fillText(character, 0, this.devSetting['outSize'])
        this.fontWidth = parseInt(this.cGC.measureText(character).width)
        this.characterData = this.cGC.getImageData(0, 0, this.fontWidth + this.devSetting['outSize'], this.devSetting['font-size'] + this.devSetting['outSize'])
        //display canvas
        //document.body.appendChild(this.dCC)
        //clear canvas data
        this.cGC.clearRect(0, 0, this.cGC.measureText(character).width + this.devSetting['outSize'], this.devSetting['font-size'] + this.devSetting['outSize'])
        console.log('here in getData')
    }
    #generateFont(charIndex) {
        console.log(this.characterData)
        for (let rowTemp = 0; rowTemp < this.characterData.height; rowTemp++) {
            if (charIndex == 0)
                this.characterFont[rowTemp] = ''
            for (let colTemp = 0; colTemp < this.characterData.width; colTemp++) {
                let colorInfo = this.characterData.data[4 * colTemp + rowTemp * 4 * this.characterData.width + 0]         //r
                    + this.characterData.data[4 * colTemp + rowTemp * 4 * this.characterData.width + 1]                   //g
                    + this.characterData.data[4 * colTemp + rowTemp * 4 * this.characterData.width + 2]                   //b
                //+ this.characterData[4 * colTemp + rowTemp * 4 * this.characterData.width + 3]                          //a  used independently
                if (colorInfo < this.devSetting.greyLevel && this.characterData.data[4 * colTemp + rowTemp * 4 * this.characterData.width + 3] > this.devSetting.opacity) {
                    this.characterFont[rowTemp] = this.characterFont[rowTemp] + this.devSetting.foreground
                }
                else {
                    this.characterFont[rowTemp] = this.characterFont[rowTemp] + this.devSetting.background
                }
            }
        }
        //console.log(this.characterFont)
    }
    get getCharacterFont() {
        return this.characterFont
    }
}
