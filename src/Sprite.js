import GameObject from "./GameObject.js"
import AnimManager from "./AnimManager.js"

class Sprite extends GameObject {
    constructor(texture = null, hasAnim = true) {
        super()
        this.texture = texture

        if (hasAnim) {
            this.frame = { x: 0, y: 0, w: 0, h: 0 }
            this.anims = new AnimManager(this)
        }
    }

    setCollisionBox(x, y, w, h) {
        this.hitBox = { x, y, w, h }
        this.body = {
            x: x + this.anchor.x,
            y: y + this.anchor.y,
            w: w * this.scale.x,
            h: h * this.scale.y
        }
    }

    setOrigin(x, y) {
        if (!y && x === 0) {
            this.anchor.x = -(this.frame.w / 2)
            this.anchor.y = -(this.frame.h / 2)
        }
    }

    update(dt) {
        if (this.anims)
            this.anims.update(dt)
    }
}

export default Sprite