class Texture {
    constructor(url) {
        this.img = new Image()
        this.img.src = url
        this.img.onload = function () {
            console.log("Image loaded")
        }
        this.img.onerror = function () {
            console.error("Error when loading an image")
        }
    }
}

class Textures {
    constructor(urls) {
        this.urls = urls;
        this.imgs = []
    }

    load(callback) {
        const p = this.urls.map(i => this.loadImage(i))
        Promise.all(p)
            .then(res => {
                let o = Object.assign(...res)
                return callback(o);
            })
            .catch(err => {
                return callback(err)
            })
    }

    loadImage(i) {
        return new Promise((resolve, reject) => {

            // Create the image
            const img = new Image();

            // When image is loaded, resolve the promise
            img.addEventListener('load', () => {
                let o = { [i[0]]: img }
                resolve(o);
            });

            // When there's an error during load, reject the promise
            img.addEventListener('error', () => {
                reject();
            })

            // Assign URL
            img.src = i[1];

        });
    }
}

export {
    Texture,
    Textures
}