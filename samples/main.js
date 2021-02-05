import { Game, Scale } from '../src/vx-one.js'
import LogoScene from "./scenes/LogoScene.js"
import TitleScene from "./scenes/TitleScene.js"
import GameScene from "./scenes/GameScene.js"

// initial config
const game = new Game({
    parent: 'game',
    mode: Scale.RESIZE,
    pixel: false,
    w: 800,
    h: 600,
    debugMode: true
})

game.addScene(new LogoScene(game)) // initial scene
// game.addScene(new TitleScene(game))
game.addScene(new GameScene(game))
game.run()