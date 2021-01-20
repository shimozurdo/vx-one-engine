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
        if (this.mode === Scale.RESIZE) {
            // this.view.width = window.innerWidth
            // this.view.height = window.innerHeight
            // this.w = config.w
            // this.h = config.h
            this.w = this.view.width = config.w
            this.h = this.view.height = config.h
            this.resizeScreen()
            this.resizeCanvas()
        } else {
            this.w = this.view.width = config.w
            this.h = this.view.height = config.h
        }
        if (config.pixel) {
            canvas.style.imageRendering = 'pixelated'
            this.ctx.imageSmoothingEnabled = false
        }
    }

    resizeScreen() {
        const resizeCanvas = this.resizeCanvas.bind(this)
        window.addEventListener('resize', resizeCanvas, false)
    }

    render(scene, clear = true) {
        if (scene.active == false) {
            return
        }

        const { ctx, w, h, mode } = this

        function renderRec(scene) {
            // Render the container children
            scene.children.forEach(child => {
                if (child.visible == false) {
                    return
                }
                ctx.save()

                // Handle transforms
                if (child.pos) {
                    // if (mode === Scale.RESIZE) {
                    //     ctx.translate((window.innerWidth - w) / 2, (window.innerHeight - h) / 2)
                    // }
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
                } else if (child instanceof Sprite && child.texture) {
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

    resizeCanvas() {

        //Get the image dimensions:
        const image = {
            width: this.view.width,
            height: this.view.height
        }

        //Get the page dimensions:
        const page = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        //Get the image ratio, this is what we want to preserve:
        let imageRatio = image.width / image.height

        //Get the page ratio, this is what we use to decide which dimension to fix:
        let pageRatio = page.width / page.height

        //Do we fix the height? (if not, we fix the width)
        let fixHeight = (imageRatio > pageRatio)

        //Create a place to store the new image dimensions:
        let newImage = {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        }

        //Do the calculations:
        if (fixHeight) {
            newImage.height = page.height
            newImage.width = page.height * imageRatio
            //The height matches the page height, so we need to center
            //the width.
            // newImage.left = -(newImage.width - page.width) / 2
        } else {
            newImage.height = page.width / imageRatio;
            newImage.width = page.width;
            if (newImage.height > window.innerHeight) {
                newImage.height = window.innerHeight
                newImage.width = window.innerHeight * imageRatio
                newImage.left = -(newImage.width - page.width) / 2
            }
            // newImage.top = -(newImage.height - page.height) / 2
        }

        //Now we set the image's new dimensions:
        this.view.style.position = 'absolute'
        this.view.style.top = `${newImage.top}px`
        this.view.style.left = `${newImage.left}px`
        this.view.style.width = `${newImage.width}px`
        this.view.style.height = `${newImage.height}px`

        console.log(fixHeight, image, page)
    }
}

export default Render

