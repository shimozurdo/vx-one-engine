import GameObject from "./GameObject.js"
import { Graph } from "./Constants.js"

class Rect extends GameObject {
    constructor(type = Graph.RECT) {
        super()
        this.type = type
        this.w 
        this.h 
        this.style 
    }
}

export default Rect