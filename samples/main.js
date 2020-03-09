import vx from "../dist/vx.engine.min.js";
import Level1Scene from "./level1.scene.js";
const { Game } = vx;

const game = new Game({
    width: 800,
    height: 600,
    debug: true
});

game.scene = new Level1Scene(game);
game.run((dt, t, fps, ctx) => {
    // Debug mode
    ctx.fillStyle = 'red';
    ctx.fillText("FPS: " + fps, 11, 11);
    ctx.fillStyle = 'blue';
    ctx.fillText("FPS: " + fps, 12, 12);
});