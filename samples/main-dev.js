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
    player: new Texture("p.png"),
    bullet: new Texture("b.png"),
    playerSheet: new Texture("player.png")
}

const introScene = new Scene('titleScene')

// Load game textures

const player2 = new TileSprite();
player2.scale.x = 2
player2.scale.y = 2
player2.pos = { x: 100, y: 100 }
player2.tileW = 16
player2.tileH = 16
player2.texture = textures.playerSheet

const player = new Sprite("player")
player.scale.x = 4
player.scale.y = 4
player.anchor.x = -32
player.anchor.y = -32
player.pos = { x: 300, y: 300 }
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
introScene.add(player2)

game.addScene(introScene)

game.run((dt, t, controls) => {
    // Randomly change x frame:
    player2.pos.x += controls.x * dt * 200;
    player2.pos.y += controls.y * dt * 200;
    player2.frame.x = math.rand(0, 3);

    if (controls.action && t - lastShot > 0.15) {
        lastShot = t;
        fireBullet(player2.pos.x + 24, player2.pos.y + 10);
    }

    // Destroy bullets when they go out of the screen
    bullets.children.forEach(bullet => {
        if (bullet.pos.x > game.width + 20) {
            bullet.dead = true;
        }
    });

})