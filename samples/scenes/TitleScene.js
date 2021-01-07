import {
    Game,
    Scene,
    Text,
    Sprite,
    math,
    Container,
    TileMap,
    Camera,
    TextureManager
} from '../../src/vx-one.js'

class TitleScene extends Scene {

    constructor(game) {
        super('TitleScene')
        this.life = 2
        this.game = game
        const urls = [['logo', "logo.png"], ['player', 'player.png'], ['cave', 'cave.png']]

        const textures = new TextureManager(urls)
        textures.load((imgs) => {
            this.logo = new Sprite(imgs.logo)
            this.logo.pos = { x: game.width / 2, y: game.height / 2 }
            this.logo.anchor = { x: -128, y: -32 }
            this.add(this.logo)
            this.active = true
        })
    }

    update(dt, t) {
        super.update(dt, t)
        this.life -= dt

        const { logo, life } = this
        if (life < 0) {
            this.game.launchScene('TitleScene');
        }
    }

}

export default LogoScene