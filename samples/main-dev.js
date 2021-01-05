import { Game, Scene, Text, Sprite, Texture, Scale, TileSprite, math, Container } from '../src/vx-one.js'

const game = new Game({
    parent: 'game',
    mode: Scale.RESIZE,
    pixel: true,
    width: 800,
    height: 600,
    backgroundColor: '#43BB43',
    debug: true
})

// Load game textures
const textures = {    
    bullet: new Texture("b.png"),
    player: new Texture("player.png")
}

const introScene = new Scene('titleScene')

// Load game textures
const player = new TileSprite();
player.scale.x = 2
player.scale.y = 2
player.pos = { x: 100, y: 100 }
player.tileW = 16
player.tileH = 16
player.texture = textures.player

const sayHelloTxt = new Text('fps: ')
sayHelloTxt.pos = { x: 5, y: 15 }
sayHelloTxt.anchor.x = 0
sayHelloTxt.anchor.y = 0
sayHelloTxt.style = { font: '16px Arial', fill: 'red', align: 'left' }

const bullets = new Container()
function fireBullet(x, y) {
    const bullet = new Sprite()
    bullet.scale.x = 3
    bullet.scale.y = 3
    bullet.pos = { x: x, y: y };
    bullet.texture = textures.bullet
    bullet.update = function (dt) {
        this.pos.x += 400 * dt
    };
    bullets.add(bullet)
}

// Game state variables
let lastShot = 0

introScene.add(sayHelloTxt)
introScene.add(player)
introScene.add(bullets)

game.addScene(introScene)

game.run((dt, t, controls) => {
    // Randomly change x frame:
    player.pos.x += controls.x * dt * 200
    player.pos.y += controls.y * dt * 200
    player.frame.x =  Math.floor(t / 0.15) % 4

    if (controls.action && t - lastShot > 0.15) {
        lastShot = t
        fireBullet(player.pos.x + 24, player.pos.y + 10)
    }

    // Destroy bullets when they go out of the screen
    bullets.children.forEach(bullet => {
        if (bullet.pos.x > game.width + 20) {
            bullet.dead = true
        }
    });

})