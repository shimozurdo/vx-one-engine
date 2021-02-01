import Sprite from "./Sprite.js"
import { Graph, Scale } from './Constants.js'
import Rect from "./Rect.js"

class Render {

    constructor(config) {
        const canvas = document.createElement("canvas")
        this.view = canvas
        this.ctx = canvas.getContext("2d")
        this.ctx.textBaseline = "top"
        this.mode = config.mode
        this.w = this.view.width = config.w
        this.h = this.view.height = config.h
        this.pixel = config.pixel
        if (this.mode === Scale.RESIZE) {
            const resizeCanvas = this.resizeCanvas.bind(this)
            resizeCanvas()
            window.addEventListener('resize', resizeCanvas, false)
        }
    }

    render(scene, clear = true) {
        if (scene.active == false) {
            return
        }

        const { ctx, w, h, mode } = this

        function renderRec(scene, isFirstNode = true) {
            // Render the container children
            scene.children.forEach(child => {
                if (child.visible == false) {
                    return
                }
                ctx.save()

                // Handle resize
                if (mode === Scale.RESIZE && isFirstNode) {
                    // TO DO: Improve this
                    ctx.translate(Math.round(scene.pos.x), Math.round(scene.pos.y))
                    if (w > window.innerWidth && h < window.innerHeight) {
                        ctx.scale((window.innerWidth * 100 / w) / 100, (window.innerWidth * 100 / w) / 100)
                    } else if (h > window.innerHeight && w < window.innerWidth) {
                        ctx.scale((window.innerHeight * 100 / h) / 100, (window.innerHeight * 100 / h) / 100)
                    } else if (w > window.innerWidth && h > window.innerHeight) {
                        if (window.innerWidth > window.innerHeight)
                            ctx.scale((window.innerHeight * 100 / h) / 100, (window.innerHeight * 100 / h) / 100)
                        else
                            ctx.scale((window.innerWidth * 100 / w) / 100, (window.innerWidth * 100 / w) / 100)
                    } else if (window.innerHeight > h) {
                        ctx.scale((window.innerHeight * 100 / h) / 100, (window.innerHeight * 100 / h) / 100)
                    }
                }
                // if(child.name === "hb")
                // debugger
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
                    const px = child.pivot ? child.pivot.x : 0
                    const py = child.pivot ? child.pivot.y : 0
                    ctx.translate(px, py)
                    ctx.rotate(child.rotation)
                    ctx.translate(-px, -py)
                }

                // Draw the leaf nodes
                if (child.text) {
                    const { font, fill, align } = child.style
                    if (font) ctx.font = font
                    if (fill) ctx.fillStyle = fill
                    if (align) ctx.textAlign = align
                    ctx.fillText(child.text, 0, 0)
                } else if (child instanceof Sprite) {
                    const img = child.texture
                    if (child.frame) {
                        ctx.drawImage(
                            img,
                            child.frame.x * child.frame.w,
                            child.frame.y * child.frame.h,
                            child.frame.w,
                            child.frame.h,
                            0,
                            0,
                            child.frame.w,
                            child.frame.h
                        );
                    } else {
                        ctx.drawImage(img, 0, 0);
                    }
                } else if (child instanceof Rect) {
                    if (child.type === Graph.RECT) {
                        const { fill } = child.style
                        ctx.fillStyle = fill;
                        ctx.fillRect(0, 0, child.w, child.h);
                    } else if (child.type === Graph.RECT_OUTLINE) {
                        const { fill, lineWidth } = child.style
                        ctx.strokeStyle = fill;
                        ctx.lineWidth = lineWidth
                        ctx.strokeRect(0, 0, child.w, child.h);
                    }
                }

                // Render any child sub-nodes
                if (child.children) {
                    renderRec(child, false)
                }

                ctx.restore()
            })
        }

        if (clear) {
            ctx.clearRect(0, 0, w, h)
        }
        renderRec(scene)
    }

    resizeCanvas() {
        this.view.width = window.innerWidth
        this.view.height = window.innerHeight
        // fix pixel perfect render
        if (this.pixel) {
            this.view.style.imageRendering = 'pixelated'
            this.ctx.webkitImageSmoothingEnabled = false
            this.ctx.mozImageSmoothingEnabled = false
            this.ctx.imageSmoothingEnabled = false
        }
    }
}

export default Render

