import {
    Game,
    Scene,
    Text,
    Sprite,
    Texture,
    math,
    Container,
    TileMap
} from '../src/vx-one.js'

const game = new Game({
    parent: 'game',
    pixel: true,
    width: 800,
    height: 600,
    backgroundColor: '#43BB43',
    debug: true
})

// Load game textures
const textures = {
    bullet: new Texture("b.png"),
    player: new Texture("player.png"),
    cave: new Texture("cave.png")
}

const introScene = new Scene('titleScene')

const tileSize = 32;
const mapW = Math.floor(800 / tileSize);
const mapH = Math.floor(600 / tileSize);

// Make a random level of tile indexes
const level = [];
for (let y = 0; y < mapH; y++) {
  for (let x = 0; x < mapW; x++) {
    level.push({
      x: math.rand(5),
      y: math.rand(2)
    });
  }
}

const map = new TileMap(level, mapW, mapH, tileSize, tileSize, textures.cave);

// class Player extends Sprite {

//     constructor() {

//         super()
//         this.speed = math.randf(0.9, 1.2)

//         // Set up the different animations
//         const { anims } = this;
//         anims.add("walk", [0, 1, 2, 3].map(x => ({ x, y: 0 })), 0.07 * this.speed)
//         anims.add(
//             "idle",
//             [{ x: 0, y: 0 }],
//             0.15 * this.speed
//         );

//         // Play one of them!
//         anims.play("walk")

//     }

//     update(dt) {
//         super.update(dt)
//     }

// }

// // Load game textures
// const player = new Player()
// player.scale.x = 2
// player.scale.y = 2
// player.pos = { x: 100, y: 100 }
// player.tileW = 16
// player.tileH = 16
// player.texture = textures.player

const player = new Sprite()
player.scale.x = 2
player.scale.y = 2
player.pos = { x: 100, y: 100 }
player.tileW = 16
player.tileH = 16
player.texture = textures.player
player.speed = math.randf(0.9, 1.2)
player.anims.add("walk", [0, 1, 2, 3].map(x => ({ x, y: 0 })), 0.07 * player.speed)
player.anims.add("idle", [{ x: 0, y: 0 }], 0.15 * player.speed)
player.anims.play("idle")



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
    bullet.pos = { x: x, y: y }
    bullet.texture = textures.bullet
    bullet.update = function (dt) {
        this.pos.x += 400 * dt
    };
    bullets.add(bullet)
}

// Game state variables
let lastShot = 0
introScene.add(map)
introScene.add(sayHelloTxt)
introScene.add(player)
introScene.add(bullets)

game.addScene(introScene)

game.run((dt, t, controls) => {
    // Randomly change x frame:
    player.pos.x += controls.x * dt * 200
    player.pos.y += controls.y * dt * 200

    if (controls.x) {
        player.anims.play("walk")
        // Flip to correct direction
        player.scale.x = Math.sign(controls.x) * 2
        console.log(player.scale.x)
        player.anchor.x = player.scale.x > 0 ? -16 : 16
    } else {
        player.anims.play("idle")
    }

    if (controls.action && t - lastShot > 0.15) {
        lastShot = t
        fireBullet(player.pos.x + 24, player.pos.y)
    }

    // Destroy bullets when they go out of the screen
    bullets.children.forEach(bullet => {
        if (bullet.pos.x > game.width + 20) {
            bullet.dead = true
        }
    })

})