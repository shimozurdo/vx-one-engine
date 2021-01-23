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
        const { anchor, body, scale, origin } = this
        let x, y
        if (anchor.x != 0)
            x = (body.w * scale.x) * origin.x * Math.sign(anchor.x)
        else
            x = body.x * scale.x
        if (anchor.y != 0)
            y = (body.h * scale.y) * origin.y * Math.sign(anchor.y)
        else
            y = body.y * scale.y
        return {
            x: x,
            y: y,
            w: body.w * scale.x,
            h: body.h * scale.y
        }
    }

    setOrigin(x, y) {
        const { anchor, frame, scale } = this
        if (x == 0.5 && !y) {
            anchor.x = -(frame.w / 2)
            anchor.y = -(frame.h / 2)
            this.origin = { x, y: x }
        } else if (x == 0 && y === 0) {
            anchor.x = 0
            anchor.y = 0
            this.origin = { x, y }
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