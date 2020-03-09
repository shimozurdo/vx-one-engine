import math from "./utils.js"

class Sprite {
    constructor(texture, pos, color = RGBA(255, 0, 0, 1)) {
        this.texture = texture;
        this.pos = pos;
        this.scale = new math.Vector2(1, 1);
        this.pivot = new math.Vector2(0, 0);
        this.rotation = 0;
    }
}

export default Sprite;