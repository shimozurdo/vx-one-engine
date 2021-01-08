import { Scene, Text, Graphics, Graph } from '../../src/vx-one.js'

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

        const button = new Graphics()
        button.type = Graph.RECT
        button.src = { w: 100, h: 50, fill: '#76ff03' }
        button.pos = { x: game.w / 2, y: 400 }
        button.anchor = { x: -50, y: -25 }
        this.add(button)

        const playTxt = new Text('Play')
        const font2 = `30px 'Concert One', cursive`;
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