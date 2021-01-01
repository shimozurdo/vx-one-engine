import { Game, Scene, Text } from '../src/vx-one.js'
import { Scale } from '../src/constants.js'

const game = new Game({
    parent: 'game',
    mode: Scale.RESIZE,
    pixel: true,
    width: 800,
    height: 600,
    backgroundColor: '#43BB43',
    debug: true
});

var introScene = new Scene('titleScene');

var sayHelloTxt = new Text('Hello Gamers!', { x: game.width / 2, y: game.height / 2 }, { font: '30px Arial', fill: 'white', align: 'center' });

introScene.add(sayHelloTxt);

game.addScene(introScene);

game.run();