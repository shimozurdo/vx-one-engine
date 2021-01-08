import GameObject from "./GameObject.js"

class Graphics extends GameObject {
    constructor(type = null) {
        super()
        this.type = type
        this.src = {}
    }
}

export default Graphics