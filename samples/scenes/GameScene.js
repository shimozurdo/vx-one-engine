import { Scene, Text, Graphics, Graph } from '../../src/vx-one.js'

class GameScene extends Scene {

    constructor(game) {
        super('GameScene')
        this.game = game
    }

    init() {
        const { game } = this

        const titleTxt = new Text('Game')
        const font = `80px 'Concert One', cursive`;
        titleTxt.pos = { x: game.w / 2, y: 200 }
        titleTxt.style = { font: font, fill: '#76ff03', align: 'center' }
        this.add(titleTxt)

        this.active = true
    }

    update(dt, t) {
        super.update(dt, t)
    }

}

export default GameScene