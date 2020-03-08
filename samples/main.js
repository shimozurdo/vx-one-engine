import vx from "../src/index.js";
import MenuScene from "./menu.scene.js";
const { Game } = vx;

const game = new Game({
    width: 800,
    height: 600,
    debug: true
});

game.scene = new MenuScene(game);
game.run((dt, t, fps, ctx) => {
    // Debug mode
    ctx.fillStyle = 'red';
    ctx.fillText("FPS: " + fps, 11, 11);
    ctx.fillStyle = 'blue';
    ctx.fillText("FPS: " + fps, 12, 12);
});