import GameObject from "./GameObject.js"
import AnimManager from "./AnimManager.js"

class Sprite extends GameObject {
    constructor(texture = null, w = 0, h = 0) {
        super()
        this.texture = texture
        this.tileW = w
        this.tileH = h
        this.frame = { x: 0, y: 0 }
        this.anims = new AnimManager(this)
    }

    update(dt) {
        this.anims.update(dt)
    }

    get w() {
        return this.tileW * Math.abs(this.scale.x)
    }

    get h() {
        return this.tileH * Math.abs(this.scale.y)
    }
}

export default Sprite