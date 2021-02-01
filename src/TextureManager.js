class TextureManager {
    constructor(urls) {
        this.urls = urls
        this.imgs = {}
    }

    load(callback) {
        const p = this.urls.map(i => this.loadImage(i))
        Promise.all(p)
            .then(res => {
                let o = this.imgs = Object.assign(...res)
                return callback(null, o)
            })
            .catch(err => {
                return callback(err)
            })
    }

    loadImage(i) {
        return new Promise((resolve, reject) => {
            const img = new Image()
            img.addEventListener('load', () => {
                let o = { [i[0]]: img }
                resolve(o)
            })
            img.addEventListener('error', () => {
                console.error('Error when loading an image')
                reject()
            })
            img.src = i[1]
        })
    }
}

export default TextureManager