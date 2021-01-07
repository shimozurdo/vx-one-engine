import { Game, Scene, Text, Sprite, math, Container, TileMap, Camera } from '../src/vx-one.js'
import LogoScene from "../samples/scenes/LogoScene.js"

// initial config
const game = new Game({
    parent: 'game',
    pixel: false,
    width: 800,
    height: 600,
    backgroundColor: '#43BB43',
    debugMode: true
})

const scene = new LogoScene(game) 
game.addScene(scene)
game.run()

// // Load game textures
// const textures = {
//     bullet: new Texture("b.png"),
//     player: new Texture("player.png"),
//     cave: new Texture("cave.png")
// }

// const scene = new Scene('titleScene')
// game.addScene(scene)

// const map = new TileMap(textures.cave);

// map.tileSize = 32;
// map.mapW = Math.ceil(1600 / map.tileSize)
// map.mapH = Math.ceil(600 / map.tileSize)
// map.tileW = map.tileSize
// map.tileH = map.tileSize

// const level = [];
// for (let i = 0; i < map.mapW * map.mapH; i++) {
//     const isTopOrBottom = i < map.mapW || Math.floor(i / map.mapW) === map.mapH - 1;
//     const isLeft = i % map.mapW === 0;
//     const isRight = i % map.mapW === map.mapW - 1;
//     const isSecondRow = ((i / map.mapW) | 0) === 1;

//     if (isTopOrBottom) {
//         level.push({ x: 2, y: 1 });
//     } else if (isLeft) {
//         level.push({ x: 1, y: 1 });
//     } else if (isRight) {
//         level.push({ x: 3, y: 1 });
//     } else if (isSecondRow) {
//         level.push({ x: 4, y: 1 });
//     } else {
//         // Random ground tile
//         level.push({ x: math.rand(0, 9), y: math.rand(0, 9) });
//     }
// }

// map.addTiles(level);

// const bounds = {
//     left: map.tileSize,
//     right: 1600 - map.tileSize * 2,
//     top: map.tileSize * 2,
//     bottom: 600 - map.tileSize * 2
// };

// const player = new Sprite()
// player.scale.x = 2
// player.scale.y = 2
// player.pos = { x: 100, y: 100 }
// player.tileW = 16
// player.tileH = 16
// player.texture = textures.player
// player.speed = math.randf(0.9, 1.2)
// player.anims.add("walk", [0, 1, 2, 3].map(x => ({ x, y: 0 })), 0.07 * player.speed)
// player.anims.add("idle", [{ x: 0, y: 0 }], 0.15 * player.speed)
// player.anims.play("idle")

// const camera = new Camera(player, { w: 800, h: 600 }, { w: 1600, h: 600 });

// const sayHelloTxt = new Text('fps: ')
// sayHelloTxt.pos = { x: 5, y: 15 }
// sayHelloTxt.anchor.x = 0
// sayHelloTxt.anchor.y = 0
// sayHelloTxt.style = { font: '16px Arial', fill: 'red', align: 'left' }

// const bullets = new Container()

// function fireBullet(x, y) {
//     const bullet = new Sprite()
//     bullet.scale.x = 3
//     bullet.scale.y = 3
//     bullet.pos = { x: x, y: y }
//     bullet.texture = textures.bullet
//     bullet.update = function (dt) {
//         this.pos.x += 400 * dt
//     };
//     bullets.add(bullet)
// }

// // Game state variables
// let lastShot = 0

// camera.add(map)
// camera.add(player)
// camera.add(bullets)

// scene.add(camera)

// game.run((dt, t, controls) => {
//     // Testing the game

//     player.pos.x += controls.x * dt * 200
//     player.pos.y += controls.y * dt * 200

//     if (controls.x) {
//         player.anims.play("walk")
//         // Flip to correct direction
//         player.scale.x = Math.sign(controls.x) * 2

//         player.anchor.x = player.scale.x > 0 ? -16 : 16
//     } else {
//         player.anims.play("idle")
//     }

//     if (controls.action && t - lastShot > 0.30) {
//         lastShot = t
//         fireBullet(player.pos.x + 24, player.pos.y)
//     }

//     // Destroy bullets when they go out of the screen
//     bullets.children.forEach(bullet => {
//         if (bullet.pos.x > 1600) {
//             bullet.dead = true
//         }
//     })

//     const { top, bottom, left, right } = bounds;
//     player.pos.x = math.clamp(player.pos.x, left, right);
//     player.pos.y = math.clamp(player.pos.y, top, bottom);

// })