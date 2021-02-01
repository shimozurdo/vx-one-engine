import GameObject from "./GameObject.js"
import AnimManager from "./AnimManager.js"

class Sprite extends GameObject {
    constructor(texture = null, hasAnim = true) {
        super()
        this.texture = texture
        this.flipped = { x: false, y: false }
        this.body = {}
        if (hasAnim) {
            this.frame = { x: 0, y: 0, w: texture.width, h: texture.height }
            this.anims = new AnimManager(this)
        }
    }

    set hitBox({ x, y, w, h }) {
        this.body = { x, y, w, h }
    }

    get hitBox() {
        const { anchor, body, scale, flipped } = this
        let x, y
        x = body.x * scale.x * (flipped.x ? -1 : 1)
        y = body.y * scale.y * (flipped.y ? -1 : 1)

        if (anchor.x !== 0)
            x = x + anchor.x

        if (anchor.x !== 0)
            y = y + anchor.y

        return {
            x: x,
            y: y,
            w: Math.abs(body.w * scale.x),
            h: Math.abs(body.h * scale.y)
        }
    }

    setOrigin(x, y) {
        const { anchor, frame } = this
        const _y = y || x
        anchor.x = -(frame.w * x)
        anchor.y = -(frame.h * _y)
        this.origin = { x: x, y: _y }
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
        this.flipped.x = fx > 0 ? false : true
        const { scale, anchor } = this
        scale.x = Math.sign(fx) * Math.abs(scale.x)
        if (anchor.x === 0)
            anchor.x = -16 //repair
        else
            anchor.x = scale.x > 0 ? -Math.abs(anchor.x) : Math.abs(anchor.x)

    }

    update(dt) {
        if (this.anims)
            this.anims.update(dt)
    }
}

export default Sprite