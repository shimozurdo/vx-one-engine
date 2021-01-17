import { Scene, Sprite, TextureManager } from '../../src/vx-one.js'

class LogoScene extends Scene {

    constructor(game) {
        super('LogoScene')
        this.life = 2
        this.game = game
        this.init()
    }

    init() {
        const urls = [
            ['logo', "logo.png"],
            ['player', 'player.png'],
            ['tiles', 'tiles.png'],
            ['bullet', 'bullet.png'],
            ['coins', 'coins.png']
        ]
        const { game } = this
        const textures = new TextureManager(urls)
        textures.load((imgs) => {
            this.logo = new Sprite(imgs.logo)
            this.logo.pos = { x: game.w / 2, y: game.h / 2 }
            this.logo.anchor = { x: -128, y: -32 }
            this.add(this.logo)
            this.game.textures = textures
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