import { Scene, Text, Rect, Graph } from '../../src/vx-one.js'

class TitleScene extends Scene {

    constructor(game) {
        super('TitleScene')
        this.game = game
    }

    init() {
        const { game } = this
        let w2 = 800
        let h2 = 600
        let x2 = 0 + ((window.innerWidth - w2) / 2);
        let y2 = 0 + ((window.innerHeight - h2) / 2);
        this.pos = {
            x: x2,
            y: y2
        }

        let i = new Rect(Graph.RECT)
        i.style = { fill: '#000' }
        i.w = 800
        i.h = 600
        this.add(i)

        i = new Rect(Graph.RECT_OUTLINE)
        i.style = { fill: 'red', lineWidth: 10 }
        i.w = 800
        i.h = 600
        this.add(i)

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

        const playTxt = new Text('Start')
        const font2 = `30px 'Concert One', cursive`
        playTxt.pos = { x: game.w / 2, y: 410 }
        playTxt.style = { font: font2, fill: '#000', align: 'center' }
        this.add(playTxt)

        this.active = true
    }

    update(dt, t) {
        super.update(dt, t)
        //console.log(this.game.mouse.isDown)
        if (this.game.mouse.isDown) {
            this.active = false
            this.game.launchScene('GameScene')
        }
    }

}

export default TitleScene