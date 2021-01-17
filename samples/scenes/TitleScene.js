import { Scene, Text, Rect } from '../../src/vx-one.js'

class TitleScene extends Scene {

    constructor(game) {
        super('TitleScene')
        this.game = game
    }

    init() {
        const { game } = this

        const titleTxt = new Text('Super Game')
        const font = `80px 'Concert One', cursive`;
        titleTxt.pos = { x: game.w / 2, y: 200 }
        titleTxt.style = { font: font, fill: '#76ff03', align: 'center' }
        this.add(titleTxt)

        const button = new Rect()
        button.style = { fill: '#76ff03' }
        button.w = 300
        button.h = 50
        button.pos = { x: game.w / 2, y: 400 }
        button.anchor = { x: -150, y: -25 } // center
        this.add(button)

        const playTxt = new Text('Press space bar')
        const font2 = `30px 'Concert One', cursive`
        playTxt.pos = { x: game.w / 2, y: 410 }
        playTxt.style = { font: font2, fill: '#000', align: 'center' }
        this.add(playTxt)

        this.active = true
    }

    update(dt, t) {
        super.update(dt, t)
        if (this.game.controls.action) {
            this.active = false
            this.game.launchScene('GameScene')
        }
    }

}

export default TitleScene