class Render {
    constructor(config) {
        const canvas = document.createElement("canvas")
        this.view = canvas
        this.ctx = canvas.getContext("2d")
        if (config.pixel) {
            canvas.style.imageRendering = 'pixelated'
            this.ctx.imageSmoothingEnabled = false
        }

        this.width = canvas.width = config.width
        this.height = canvas.height = config.height
        this.ctx.imageSmoothingEnabled = false
        this.ctx.textBaseline = "top"
        this.backgroundColor = config.backgroundColor || "white"
    }

    render(scene, debugObj, clear = true) {
        if (scene.active == false) {
            return
        }

        const { ctx, width, height, backgroundColor } = this


        function renderRec(scene) {
            // Render the container children

            scene.children.forEach(child => {
                if (child.visible == false) {
                    return
                }
                ctx.save()

                // ctx.fillStyle = backgroundColor
                // ctx.fillRect(0, 0, width, height)

                // Handle transforms
                if (child.pos) {
                    ctx.translate(Math.round(child.pos.x), Math.round(child.pos.y))
                }
                if (child.scale) {
                    ctx.scale(child.scale.x, child.scale.y)
                }
                if (child.anchor) {
                    ctx.translate(child.anchor.x, child.anchor.y);
                }

                if (debugObj.debug) {
                    // Debug mode    
                    ctx.textAlign = "left"
                    // ctx.translate(100, 100)
                    ctx.fillStyle = 'red'
                    ctx.fillText("FPS: " + debugObj.fps, -width / 2, -height / 2)
                }

                // Draw the leaf nodes
                if (child.text) {
                    const { font, fill, align } = child.style
                    if (font) ctx.font = font
                    if (fill) ctx.fillStyle = fill
                    if (align) ctx.textAlign = align
                    ctx.fillText(child.text, 0, 0)
                } else if (child.texture) {
                    ctx.drawImage(child.texture.img, 0, 0)
                }

                // Render any child sub-nodes
                if (child.children) {
                    renderRec(child)
                }

                ctx.restore()
            })
        }

        if (clear) {
            ctx.clearRect(0, 0, width, height)
        }
        renderRec(scene)
    }
}

export default Render