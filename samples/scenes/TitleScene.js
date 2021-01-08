import { Scene, Text } from '../../src/vx-one.js'

class TitleScene extends Scene {

    constructor(game) {
        super('TitleScene')
        this.game = game
    }

    init() {
        const { game } = this
        const titleTxt = new Text('Super Game')
        const font = `80px 'Concert One', cursive`;
        titleTxt.pos = { x: game.width / 2, y: 200 }
        titleTxt.style = { font: font, fill: '#76ff03', align: 'center' }
        this.add(titleTxt)
        this.active = true
    }

    update(dt, t) {
        super.update(dt, t)
        this.life -= dt
    }

}

export default TitleScene