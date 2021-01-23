import Container from "./Container.js"
import Text from "./Text.js"
import Rect from "./Rect.js"
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

    // addDebug(e) {
    //     e.children = e.children || []
    //     const i = new Rect(Graph.RECT_OUTLINE)
    //     i.w = e.frame.w
    //     i.h = e.frame.h
    //     i.style = { fill: 'cyan', lineWidth: 1 }
    //     e.children.push(i)
    //     if (e.hitBox) {
    //         const { x, y, w, h } = e.hitBox;
    //         const hb = new Rect(Graph.RECT_OUTLINE)
    //         hb.style = { fill: 'rgba(255, 0, 0, 0.5)' }
    //         hb.name = "hb"
    //         hb.w = w
    //         hb.h = h
    //         hb.pos = { x, y }
    //         e.children.push(hb);
    //     }
    // }
    addDebug(e) {
        e.children = e.children || []
        const i = new Rect(Graph.RECT_OUTLINE)
        i.w = e.frame.w
        i.h = e.frame.h
        i.style = { fill: 'cyan', lineWidth: 1 }
        e.children.push(i)
        if (e.body) {
            const { hitbox, w, h } = e.body;
            const hb = new Rect(Graph.RECT_OUTLINE)
            hb.style = { fill: 'rgba(255, 0, 0, 0.5)' }
            hb.name = "hb"
            hb.w = e.hitBox.w
            hb.h = e.hitBox.h
            hb.pos = { x: e.hitBox.x, y: e.hitBox.y }
            e.children.push(hb);
        }
    }
}

export default Debug