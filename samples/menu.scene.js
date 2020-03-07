import vx from "../src/index.js";
const { Scene, Text } = vx;

class MenuScreen extends Scene {
    constructor(game) {
        super();
        const drawText = (msg, pos, size = 24) => {
            const font = `${size}pt 'VT323', monospace`;
            const text = new Text(msg, { font: font, fill: "#111" });
            text.pos = pos;
            return this.add(text);
        };
        drawText("Hello World!", { x: 300, y: 250 });
    }

    update(dt, t) {
        super.update(dt, t);
    }
}

export default MenuScreen;
