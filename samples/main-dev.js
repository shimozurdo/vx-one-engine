import { Game, Scene, Text, Sprite, Texture, Scale } from '../src/vx-one.js'

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
    bullet: new Texture("b.png")
}

const introScene = new Scene('titleScene')

// Load game textures



const player = new Sprite(textures.player, { x: 50, y: 50 })
 player.scale.x = 5
 player.scale.y = 5
// player.anchor.x = 0
// player.anchor.y = 0
player.key = "player"

const bullet = new Sprite(textures.bullet, { x: 150, y: 150 })
 bullet.scale.x = 5;
 bullet.scale.y = 5;
//  bullet.anchor.x = -16
//  bullet.anchor.y = -16


const sayHelloTxt = new Text('Hello Gamers!', { x: game.width / 2, y: game.height /2 }, { font: '30px Arial', fill: 'white', align: 'center' })


introScene.add(sayHelloTxt)
introScene.add(player)
introScene.add(bullet)

game.addScene(introScene)

game.run()