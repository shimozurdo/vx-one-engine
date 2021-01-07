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

class LogoScene extends Scene {

    constructor() {
        super('logoScene')
        this.life = 2
        this.life = 2

        const urls = [['logo', "logo.png"], ['player', 'player.png'], ['cave', 'cave.png']]

        const textures = new TextureManager(urls)
        textures.load((res) => {
            this.logo = new Sprite(res.logo)
            this.logo.pos = { x: 220, y: 130 }
            this.add(this.logo)
            this.active = true
        })
    }

    update(dt, t) {
        super.update(dt, t)
        // Game screen update logic
    }

}

export default LogoScene