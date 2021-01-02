import { Game, Scene, Text, Sprite, Texture } from '../src/vx-one.js'
import { Scale } from '../src/constants.js'
console.log(Sprite)
const game = new Game({
    parent: 'game',
    mode: Scale.RESIZE,
    pixel: true,
    width: 800,
    height: 600,
    backgroundColor: '#43BB43',
    debug: true
});

// Load game textures
const textures = {
    player: new Texture("p.png")
};

const player = new Sprite(textures.player, { x: 400, y: 300 });

const introScene = new Scene('titleScene');

const sayHelloTxt = new Text('Hello Gamers!', { x: game.width / 2, y: 20 }, { font: '30px Arial', fill: 'white', align: 'center' });

introScene.add(sayHelloTxt);
introScene.add(player);

game.addScene(introScene);

game.run();