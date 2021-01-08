import { Scene, Text, Graphics, Graph } from '../../src/vx-one.js'

class TitleScene extends Scene {

    constructor(game) {
        super('TitleScene')
        this.game = game
    }

    init() {
        const { game } = this

        const background = new Graphics()
        background.type = Graph.RECT
        background.src = { w: game.w, h: game.h, fill: 'white' }
        // this.add(background)

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

        this.active = true
    }

    update(dt, t) {
        super.update(dt, t)
        this.life -= dt
    }

}

export default TitleScene