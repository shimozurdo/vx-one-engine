class KeyControls {
    constructor() {
        this.keys = {}
        document.addEventListener("keydown", e => {
            // Check is a trick to stop the browser scrolling if the game is embedded in a web page that has scrollbars
            if ([37, 38, 39, 40, 32].indexOf(e.which) >= 0) {
                e.preventDefault()
            }
            this.keys[e.keyCode] = true
        }, false)

        document.addEventListener("keyup", e => {
            this.keys[e.which] = false
        }, false)
    }

    key(key, value) {
        if (value !== undefined) {
            this.keys[key] = value
        }
        return this.keys[key]
    }

    reset() {
        for (let key in this.keys) {
            this.keys[key] = false
        }
    }

    // Handle key actions
    get action() {
        return this.keys[32]
    }

    get x() {
        // left arrow or A key
        if (this.keys[37] || this.keys[65]) {
            return -1
        }
        // right arrow or D key
        if (this.keys[39] || this.keys[68]) {
            return 1
        }
        return 0
    }

    get y() {
        // up arrow or W key
        if (this.keys[38] || this.keys[87]) {
            return -1
        }
        // down arrow or S key
        if (this.keys[40] || this.keys[83]) {
            return 1
        }
        return 0
    }
}

class MouseControls {
    constructor(container) {
        this.el = container || document.body;

        this.pos = { x: 0, y: 0 };
        this.isDown = false;
        this.pressed = false;
        this.released = false;

        // Handlers
        document.addEventListener("mousedown", e => this.down(e), false);
        document.addEventListener("mouseup", e => this.up(e), false);
        document.addEventListener("mousemove", e => this.move(e), false);
    }

    mousePosFromEvent({ clientX, clientY }) {
        const { el, pos } = this
        const rect = el.getBoundingClientRect()
        const xr = el.width / el.clientWidth
        const yr = el.height / el.clientHeight
        pos.x = (clientX - rect.left) * xr
        pos.y = (clientY - rect.top) * yr
    }

    down(e) {
        this.isDown = true
        this.pressed = true
        this.mousePosFromEvent(e)
    }

    up() {
        this.isDown = false
        this.released = true
    }

    move(e) {
        this.mousePosFromEvent(e)
    }

    update() {
        this.released = false
        this.pressed = false
    }
}

export {
    KeyControls,
    MouseControls
}
