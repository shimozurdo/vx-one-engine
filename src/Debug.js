import Container from "./Container.js"
import Text from "./Text.js"
import Graphics from "./Graphics.js"
import { Graph } from "./Constants.js"

class Debug extends Container {
    constructor() {
        super()
        this.active = false
        const fpsTxt = new Text('fps: ')
        fpsTxt.name = 'fps'
        fpsTxt.pos = { x: 5, y: 15 }
        fpsTxt.style = { font: '16px Arial', fill: 'red', align: 'left' }
        this.add(fpsTxt)
    }

    addDebug(e) {
        e.children = e.children || [];
        const i = new Graphics()
        i.type = Graph.RECT_OUTLINE
        // i.scale = { x: 1, y: 1 }
        // i.anchor = { x: -16, y: -16 }
        // i.tileW = 16
        // i.tileH = 16
        i.src = { w: e.tileW, h: e.tileH, fill: 'cyan', lineWidth: 1 }
        // i.pos = { x: e.pos.x, y: e.pos.y }
        i.name = "test"
        e.children.push(i);
    }
}

export default Debug