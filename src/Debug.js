import Container from "./Container.js"
import Text from "./Text.js"

class Debug extends Container {
    constructor() {
        super()
        this.active = false;
        const fpsTxt = new Text('fps: ')
        fpsTxt.name = 'fps'
        fpsTxt.pos = { x: 5, y: 15 }
        fpsTxt.style = { font: '16px Arial', fill: 'red', align: 'left' }
        this.add(fpsTxt)
    }
}

export default Debug