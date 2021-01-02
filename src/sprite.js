import { Vector2 } from "./utils.js"

export class Sprite {
    constructor(texture, pos) {
        this.texture = texture;
        this.pos = pos;
        this.scale = new Vector2(1, 1);
        this.pivot = new Vector2(0, 0);
        this.rotation = 0;
    }
}

export class Texture {
    constructor(url) {
        this.img = new Image();
        this.img.src = url;
    }
}
