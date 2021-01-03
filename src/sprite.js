import GameObject from "./GameObject.js"

class Sprite extends GameObject {
    texture
    constructor(name = null) {
        super(name)

    }

    get texture() {
        return this.texture;
    }
    set texture(texture) {
        this.texture = texture
    }
}

export default Sprite