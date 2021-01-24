import { Scene, TileMap, Sprite, Camera, math, Container, Rect, Graph, wallslide } from '../../src/vx-one.js'

class GameScene extends Scene {

    constructor(game) {
        super('GameScene')
        this.game = game
    }

    init() {
        let { game } = this
        // this.pos = {
        //     x: (window.innerWidth - game.w) / 2, 
        //     y: 0
        // }

        let i = new Rect(Graph.RECT)
        i.style = { fill: '#000' }
        i.w = 1600
        i.h = 600
        this.add(i)

        const tileMap = new TileMap(game.textures.imgs.tiles)
        tileMap.tileSize = 32
        tileMap.mapW = Math.ceil(1600 / tileMap.tileSize)
        tileMap.mapH = Math.ceil(600 / tileMap.tileSize)
        tileMap.tileW = tileMap.tileSize
        tileMap.tileH = tileMap.tileSize

        const tileIndexes = [
            { id: "empty", x: 1, y: 1, walkable: true },
            { id: "wall", x: 2, y: 2, walkable: true },
            { id: "wall_end", x: 3, y: 2, walkable: true }
        ];
        const getTile = id => tileIndexes.find(t => t.id == id);
        const getIdx = id => tileIndexes.indexOf(getTile(id))

        const level = Array(tileMap.mapW * tileMap.mapH).fill(getIdx("empty"));
        for (let y = 0; y < tileMap.mapH; y++) {
            for (let x = 0; x < tileMap.mapW; x++) {
                // Map borders
                if (y === 0 || x === 0 || y === tileMap.mapH - 1 || x === tileMap.mapW - 1) {
                    level[y * tileMap.mapW + x] = getIdx("wall");
                    continue;
                }
                // Grid points - randomly skip some to make "rooms"
                if (y % 2 || x % 2 || math.randOneIn(4)) {
                    continue;
                }
                level[y * tileMap.mapW + x] = 1;
                // Side walls - pick a random direction
                const [xo, yo] = math.randOneFrom([[0, -1], [0, 1], [1, 0], [-1, 0]]);
                level[(y + yo) * tileMap.mapW + (x + xo)] = getIdx("wall");
            }
        }

        for (let y = 0; y < tileMap.mapH - 1; y++) {
            for (let x = 0; x < tileMap.mapW; x++) {
                const below = level[(y + 1) * tileMap.mapW + x];
                const me = level[y * tileMap.mapW + x];
                if (me === getIdx("wall") && below !== getIdx("wall")) {
                    level[y * tileMap.mapW + x] = getIdx("wall_end");
                }
            }
        }

        tileMap.addTiles(level.map(i => tileIndexes[i]), 2);

        const bounds = {
            left: tileMap.tileSize,
            right: 1600 - tileMap.tileSize * 2,
            top: tileMap.tileSize * 2,
            bottom: 600 - tileMap.tileSize * 2
        }

        i = new Rect(Graph.RECT)
        i.style = { fill: 'pink' }
        i.w = 32
        i.h = 32
        i.pos = { x: 100, y: 100 }
        this.add(i)


        const player = new Sprite(game.textures.imgs.player)
        player.name = "pan"
        player.pos = { x: 100, y: 100 }
        player.frame.w = 16
        player.frame.h = 16
        player.speed = 200
        player.anims.add("walk", [0, 1, 2, 1].map(x => ({ x, y: 0 })), 0.07)
        player.anims.add("idle", [{ x: 5, y: 0 }], 0.15)
        player.anims.play("idle")
        player.setOrigin(0.5)
        player.setScale(2, 2)
        player.hitBox = { x: 4, y: 0, w: 8, h: 16 }
        player.flip(true)


        game.debug.addDebug(player)

        const coin = new Sprite(game.textures.imgs.coins)
        // coin.anchor = { x: -8, y: -8 }
        coin.pos = { x: 200, y: 100 }
        coin.frame.w = 16
        coin.frame.h = 16
        coin.speed = math.randf(0.9, 1.2)
        coin.anims.add("spin", [0, 1, 2, 3].map(x => ({ x, y: 0 })), 0.2)
        coin.anims.play("spin")
        coin.hitBox = { x: 0, y: 0, w: 16, h: 16 }
        game.debug.addDebug(coin)

        const camera = new Camera(player, { w: 800, h: 600 }, { w: 1600, h: 600 });

        const bullets = new Container()

        function fireBullet(x, y, direction) {
            const bullet = new Sprite(game.textures.imgs.bullet, false)
            bullet.scale.x = 2
            bullet.name = 'bull'
            bullet.scale.y = 2
            bullet.pos = { x: x, y: y }
            bullet.anchor = { x: -16, y: -16 }
            bullet.update = function (dt) {
                if (direction > 0) {
                    this.pos.x -= 300 * dt
                    this.scale.x = -2
                } else {
                    this.pos.x += 300 * dt
                    this.scale.x = 2
                }
            }
            bullets.add(bullet)
        }

        // Game state variables
        // camera.add(tileMap)
        camera.add(player)
        camera.add(bullets)
        camera.add(coin)
        this.add(camera)

        // Keep references to things we need in "update"
        this.player = player
        this.coin = coin
        this.tileMap = tileMap
        this.bounds = bounds
        this.camera = camera
        this.bullets = bullets
        this.lastShot = 0
        this.fireBullet = fireBullet

        this.active = true
    }

    update(dt, t) {
        super.update(dt, t)
        let { game, coin, player, bounds, fireBullet, tileMap } = this

        let { x, y } = game.controls

        const xo = x * dt * 100
        const yo = y * dt * 100

        const r = wallslide(player, tileMap, xo, yo);
        //console.log(r)
        if (r.x !== 0 && r.y !== 0) {
            r.x /= Math.sqrt(2);
            r.y /= Math.sqrt(2);
        }
        player.pos.x += r.x;
        player.pos.y += r.y;

        if (game.controls.x) {
            player.anims.play("walk")
            // Flip to correct direction
            if (game.controls.x > 0)
                player.flipped.x = false
            else
                player.flipped.x = true
            player.scale.x = Math.sign(game.controls.x) * 2

            player.anchor.x = player.scale.x > 0 ? -16 : 16

            //player.flipX(Math.sign(game.controls.x))
        } else {
            player.anims.play("idle")
        }

        if (game.controls.action && t - this.lastShot > 0.30) {
            this.lastShot = t
            fireBullet(player.pos.x, player.pos.y, player.anchor.x)
        }

        // const { top, bottom, left, right } = bounds;
        // player.pos.x = math.clamp(player.pos.x, left, right);
        // player.pos.y = math.clamp(player.pos.y, top, bottom);

        if (this.hit(player, coin)) {
            console.log("collision!");
        }

        // if (this.game.mouse.isDown) {
        //     player.pos.x = this.game.mouse.pos.x
        //     player.pos.y = this.game.mouse.pos.y
        // }
    }
}

export default GameScene