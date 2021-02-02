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
        x = Math.abs(body.x * scale.x) * (flipped.x ? -1 : 1)
        y = Math.abs(body.y * scale.y) * (flipped.y ? -1 : 1)

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
    }

    get origin() {
        const { anchor, frame, scale, flipped } = this
        let x
        if (flipped.x) {
            if (anchor.x === Math.abs(frame.w * scale.x))
                x = 0
            else if (anchor.x === 0)
                x = 1
            else
                x = Math.abs(anchor.x / (frame.w * scale.x))
        } else
            x = anchor.x === 0 ? 0 : Math.abs(anchor.x / (frame.w * scale.x))

        return {
            x,
            y: anchor.y === 0 ? 0 : Math.abs(anchor.y / (frame.w * scale.x))
        }
    }

    setScale(x, y) {
        const { scale, anchor } = this
        const _y = y || x
        scale.x = Math.abs(x)
        scale.y = Math.abs(_y)
        //fix anchor        
        anchor.x = anchor.x * scale.x
        anchor.y = anchor.y * scale.y
    }

    flip(fx, fy = false) {
        const { scale, anchor, frame, origin } = this
        this.flipped.x = fx
        this.flipped.y = fy

        const fxNo = fx ? -1 : 1
        console.log(origin.x)
        if (fx) {
            scale.x = fxNo * Math.abs(scale.x)
            if (origin.x === 0)
                anchor.x = frame.w * Math.abs(scale.x)
            else if (origin.x === 1)
                anchor.x = 0
            console.log(anchor.x)
        }
        else {
            scale.x = fxNo * Math.abs(scale.x)
            if (origin.x === 0)
                anchor.x = 0
            else if (origin.x === 1)
                anchor.x = -(frame.w * Math.abs(scale.x))
        }
        if (origin.x > 0 && origin.x < 1)
            anchor.x = scale.x > 0 ? -Math.abs(anchor.x) : Math.abs(anchor.x)
        // It need to improve, just works for x

    }

    update(dt) {
        if (this.anims)
            this.anims.update(dt)
    }
}

export default Sprite