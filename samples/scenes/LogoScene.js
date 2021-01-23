import { Scene, Sprite, TextureManager, Graph, Rect } from '../../src/vx-one.js'

class LogoScene extends Scene {

    constructor(game) {
        super('LogoScene')
        this.life = 2
        this.game = game
        this.init()
    }

    init() {
        const i = new Rect(Graph.RECT)
        i.style = { fill: '#000' }
        i.w = 800
        i.h = 600
        this.add(i)

        const urls = [
            ['logo', "logo.png"],
            ['player', 'player.png'],
            ['tiles', 'tiles.png'],
            ['bullet', 'bullet.png'],
            ['coins', 'coins.png']
        ]
        const { game } = this

        // this.pos = {
        //     x: (window.innerWidth - game.w) / 2, 
        //     y: 0
        // }

        const textures = new TextureManager(urls)
        textures.load((imgs) => {
            this.logo = new Sprite(imgs.logo)
            this.logo.pos = { x: game.w / 2, y: game.h / 2 }
            this.logo.anchor = { x: -128, y: -32 }
            this.game.textures = textures
            this.add(this.logo)
            this.active = true
        })
    }

    update(dt, t) {
        super.update(dt, t)
        this.life -= dt

        const { game, life } = this
        if (life < 0) {
            this.active = false
            game.launchScene('TitleScene')
        }
    }

}

export default LogoScene