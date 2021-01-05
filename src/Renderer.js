class Render {
    constructor(config) {
        const canvas = document.createElement("canvas")
        this.view = canvas
        this.ctx = canvas.getContext("2d")
        this.ctx.textBaseline = "top"
        this.width = canvas.width = config.width
        this.height = canvas.height = config.height
        this.backgroundColor = config.backgroundColor || "white"
        if (config.pixel) {
            canvas.style.imageRendering = 'pixelated'
            this.ctx.imageSmoothingEnabled = false
        }
    }

    render(scene, clear = true) {
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
                if (child.anchor) {
                    ctx.translate(child.anchor.x, child.anchor.y);
                }
                if (child.scale) {
                    ctx.scale(child.scale.x, child.scale.y)
                }
                if (child.rotation) {
                    const px = child.pivot ? child.pivot.x : 0;
                    const py = child.pivot ? child.pivot.y : 0;
                    ctx.translate(px, py);
                    ctx.rotate(child.rotation);
                    ctx.translate(-px, -py);
                }

                // Draw the leaf nodes
                if (child.text) {
                    const { font, fill, align } = child.style
                    if (font) ctx.font = font
                    if (fill) ctx.fillStyle = fill
                    if (align) ctx.textAlign = align
                    ctx.fillText(child.text, 0, 0)
                } else if (child.texture) {
                    const img = child.texture.img;
                    if (child.tileW) {
                        ctx.drawImage(
                            img,
                            child.frame.x * child.tileW,
                            child.frame.y * child.tileH,
                            child.tileW,
                            child.tileH,
                            0,
                            0,
                            child.tileW,
                            child.tileH
                        );
                    } else {
                        ctx.drawImage(img, 0, 0);
                    }
                } else if (child.lines) {
                    ctx.clearRect(0, 0, width, height)
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