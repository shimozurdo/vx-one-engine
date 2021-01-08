import Sprite from "./Sprite.js"
import Graphics from "./Graphics.js"
import { Graph } from './Constants.js'

class Render {

    constructor(config) {
        const canvas = document.createElement("canvas")
        this.view = canvas
        this.ctx = canvas.getContext("2d")
        this.ctx.textBaseline = "top"
        this.w = canvas.width = config.w
        this.h = canvas.height = config.h
        if (config.pixel) {
            canvas.style.imageRendering = 'pixelated'
            this.ctx.imageSmoothingEnabled = false
        }
    }

    render(scene, clear = true) {
        if (scene.active == false) {
            return
        }

        const { ctx, w, h } = this

        function renderRec(scene) {
            // Render the container children
            scene.children.forEach(child => {
                if (child.visible == false) {
                    return
                }
                ctx.save()

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
                } else if (child.texture && child instanceof Sprite) {
                    const img = child.texture
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
                } else if (child instanceof Graphics) {
                    if (child.type === Graph.ROUND_RECT) {
                        const { w, h, r, fill } = child.src
                        const { x, y } = child.pos
                        ctx.strokeStyle = fill;
                        if (w < 2 * r) r = w / 2;
                        if (h < 2 * r) r = h / 2;
                        ctx.beginPath();
                        ctx.moveTo(x + r, y);
                        ctx.arcTo(x + w, y, x + w, y + h, r);
                        ctx.arcTo(x + w, y + h, x, y + h, r);
                        ctx.arcTo(x, y + h, x, y, r);
                        ctx.arcTo(x, y, x + w, y, r);
                        ctx.stroke();
                        ctx.closePath();
                    } else if (child.type === Graph.RECT) {
                        const { w, h, fill } = child.src
                        ctx.fillStyle = fill;
                        ctx.fillRect(0, 0, w, h);
                    }
                }

                // Render any child sub-nodes
                if (child.children) {
                    renderRec(child)
                }

                ctx.restore()
            })
        }

        if (clear) {
            ctx.clearRect(0, 0, w, h)
        }
        renderRec(scene)
    }
}

export default Render

