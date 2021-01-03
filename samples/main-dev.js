import { Game, Scene, Text, Sprite, Texture, Scale, TileSprite, math } from '../src/vx-one.js'

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
player2.pos = { x: 200, y: 200 };
player2.tileW = 16
player2.tileH = 16
player2.texture = textures.playerSheet

const player = new Sprite("player")
player.scale.x = 4
player.scale.y = 4
player.anchor.x = -32
player.anchor.y = -32
player.texture = textures.player

const bullet = new Sprite()
bullet.scale.x = -5
bullet.scale.y = -5
bullet.pos = { x: 150, y: 150 };
bullet.texture = textures.bullet

const sayHelloTxt = new Text('Hello Gamers!')
sayHelloTxt.pos = { x: game.width / 2, y: game.height / 2 }
sayHelloTxt.style = { font: '30px Arial', fill: 'white', align: 'center' }

introScene.add(sayHelloTxt)
introScene.add(player)
introScene.add(bullet)
introScene.add(player2)

game.addScene(introScene)

game.run(() => {
    // Randomly change x frame:

    player2.frame.x = math.rand(0, 3);

})