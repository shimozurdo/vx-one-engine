import GameObject from "./GameObject.js"
import AnimManager from "./AnimManager.js"
import { flipAnchor } from './utils.js'

class Sprite extends GameObject {
    constructor(texture = null, hasAnim = true) {
        super()
        this.texture = texture
        this.flipped = { x: false, y: false }
        this.body = {}
        this.origin = { x: 0, y: 0 }
        if (hasAnim) {
            this.frame = { x: 0, y: 0, w: texture.width, h: texture.height }
            this.anims = new AnimManager(this)
        }
    }

    set hitBox({ x, y, w, h }) {
        this.body = { x, y, w, h }
    }

    get hitBox() {
        const { anchor, body, scale, frame, flipped, origin } = this
        let x, y
        x = Math.abs(body.x * scale.x)
        y = Math.abs(body.y * scale.y)
        let anchorX = anchor.x

        if (origin.x === 0 || origin.x === 1) {
            const scaleClone = { ...scale, x: Math.abs(scale.x) }
            anchorX = flipAnchor(false, frame, scaleClone, origin)
            x = x + anchorX
        } else {
            if (anchorX !== 0)
                x = x + anchorX * (flipped.x ? -1 : 1)
        }

        if (anchor.y !== 0)
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

        if (fx) {
            scale.x = fxNo * Math.abs(scale.x)
            if (origin.x === 0 || origin.x === 1)
                anchor.x = flipAnchor(true, frame, scale, origin)
        }
        else {
            scale.x = fxNo * Math.abs(scale.x)
            if (origin.x === 0 || origin.x === 1)
                anchor.x = flipAnchor(false, frame, scale, origin)
        }
        if (origin.x > 0 && origin.x < 1)
            anchor.x = scale.x > 0 ? -Math.abs(anchor.x) : Math.abs(anchor.x)

        // It needs to be improved, just works to flip x 
    }

    update(dt) {
        if (this.anims)
            this.anims.update(dt)
    }
}

export default Sprite