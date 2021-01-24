import GameObject from "./GameObject.js"
import AnimManager from "./AnimManager.js"

class Sprite extends GameObject {
    constructor(texture = null, hasAnim = true) {
        super()
        this.texture = texture
        this.flipped = { x: false, y: false }
        if (hasAnim) {
            this.frame = { x: 0, y: 0, w: 0, h: 0 }
            this.anims = new AnimManager(this)
        }
    }

    set hitBox({ x, y, w, h }) {
        this.body = { x, y, w, h }
    }

    get hitBox() {
        const { anchor, body, scale, origin, flipped } = this
        let x, y
        if (anchor.x != 0) {
            x = Math.abs(body.w * scale.x) * origin.x * Math.sign(anchor.x)
            if (flipped.x)
                x *= -1
        } else
            x = body.x * scale.x
        if (anchor.y != 0) {
            y = Math.abs(body.h * scale.y) * origin.y * Math.sign(anchor.y)
            if (flipped.y)
            y *= -1
        } else
            y = body.y * scale.y
        return {
            x: x,
            y: y,
            w: Math.abs(body.w * scale.x),
            h: Math.abs(body.h * scale.y)
        }
    }

    setOrigin(x, y) {
        const { anchor, frame } = this
        if (x == 0.5 && !y) {
            anchor.x = -(frame.w / 2)
            anchor.y = -(frame.h / 2)
            this.origin = { x, y: x }
        } else if (x == 0 && y === 0) {
            anchor.x = 0
            anchor.y = 0
            this.origin = { x, y }
        } else if (x == 1 && y === 1) {
            anchor.x = -(frame.w)
            anchor.y = -(frame.w)
            this.origin = { x, y }
        }
    }

    setScale(x, y) {
        const { scale, anchor } = this
        scale.x = Math.abs(x)
        scale.y = Math.abs(x)
        //fix anchor        
        anchor.x = anchor.x * scale.x
        anchor.y = anchor.y * scale.y
    }

    flip(fx, fy) {
        this.flipped.x = fx
        const { scale, anchor } = this
        scale.x = fx ? -1 * scale.x : 1 * scale.x
        if (scale.x > 0)
            anchor.x = Math.abs(anchor.x)
        else if (scale.x < 0)
            anchor.x *= -1
        if (fy) {
            this.flipped.y = fy
            scale.y = fy ? -1 * scale.y : 1 * scale.y
            anchor.y *= Math.sign(scale.y)
        }
    }

    update(dt) {
        if (this.anims)
            this.anims.update(dt)
    }
}

export default Sprite