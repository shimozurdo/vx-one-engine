import GameObject from "./GameObject.js"
import AnimManager from "./AnimManager.js"

class Sprite extends GameObject {
    constructor(texture = null, isAnim = true) {
        super()
        this.texture = texture
        this.tileW
        this.tileH
        if (isAnim) {
            this.frame = { x: 0, y: 0 }
            this.anims = new AnimManager(this)
        }
    }

    update(dt) {
        if (this.anims)
            this.anims.update(dt)
    }
}

export default Sprite