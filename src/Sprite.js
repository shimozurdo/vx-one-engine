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

    update(dt) {
        if (this.anims)
            this.anims.update(dt)
    }
}

export default Sprite