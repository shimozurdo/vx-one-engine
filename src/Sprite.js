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

    set hitBox({ x, y, w, h }) {
        this.body = { x, y, w, h }
    }

    get hitBox() {
        const { anchor, body, scale } = this
        return {
            x: body.x + anchor.x,
            y: body.y + anchor.y,
            w: body.w * scale.x,
            h: body.h * scale.y
        }
    }

    setOrigin(x, y) {
        const { anchor, frame, scale, origin } = this
        origin.x = x
        origin.y = y
        if (x == 0.5 && !y) {
            anchor.x = -(frame.w / 2)
            anchor.y = -(frame.h / 2)
        }
        anchor.x = anchor.x * scale.x
        anchor.y = anchor.y * scale.y
    }

    setScale(x, y) {
        const { scale, origin } = this
        scale.x = x
        scale.y = y
        //fix anchor
        this.setOrigin(origin.x, origin.y)
    }

    update(dt) {
        if (this.anims)
            this.anims.update(dt)
    }
}

export default Sprite