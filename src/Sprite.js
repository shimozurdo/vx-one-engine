import GameObject from "./GameObject.js"
import AnimManager from "./AnimManager.js"

class Sprite extends GameObject {
    constructor(texture = null, isAnim = true) {
        super()
        this.texture = texture
        if (isAnim) {
            this.tileW = 0
            this.tileH = 0
            this.frame = { x: 0, y: 0 }
            this.anims = new AnimManager(this)
        }
    }

    update(dt) {
        if (this.anims)
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