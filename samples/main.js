import vx from "../dist/vx.engine.min.js";
import MenuScene from "./menu.scene.js";
const { Game } = vx;

const game = new Game({
    width: 800,
    height: 600,
    debug: true
});

game.scene = new MenuScene(game);
game.run((dt, t) => {
    console.log("Hello World");
});