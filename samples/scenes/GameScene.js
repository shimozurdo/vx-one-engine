import { Scene, TileMap, Sprite, Camera, math, Container } from '../../src/vx-one.js'

class GameScene extends Scene {

    constructor(game) {
        super('GameScene')
        this.game = game
        this.player
        this.tileMap
        this.bounds
        this.camera
        this.bullets
    }

    init() {
        let { game } = this

        const tileMap = new TileMap(game.textures.imgs.cave)

        tileMap.tileSize = 32;
        tileMap.mapW = Math.ceil(1600 / tileMap.tileSize)
        tileMap.mapH = Math.ceil(600 / tileMap.tileSize)
        tileMap.tileW = tileMap.tileSize
        tileMap.tileH = tileMap.tileSize

        const level = []
        for (let i = 0; i < tileMap.mapW * tileMap.mapH; i++) {
            const isTopOrBottom = i < tileMap.mapW || Math.floor(i / tileMap.mapW) === tileMap.mapH - 1
            const isLeft = i % tileMap.mapW === 0
            const isRight = i % tileMap.mapW === tileMap.mapW - 1
            const isSecondRow = ((i / tileMap.mapW) | 0) === 1

            if (isTopOrBottom) {
                level.push({ x: 2, y: 1 })
            } else if (isLeft) {
                level.push({ x: 1, y: 1 })
            } else if (isRight) {
                level.push({ x: 3, y: 1 })
            } else if (isSecondRow) {
                level.push({ x: 4, y: 1 })
            } else {
                // Random ground tile
                level.push({ x: math.rand(0, 9), y: math.rand(0, 9) })
            }
        }

        tileMap.addTiles(level);

        const bounds = {
            left: tileMap.tileSize,
            right: 1600 - tileMap.tileSize * 2,
            top: tileMap.tileSize * 2,
            bottom: 600 - tileMap.tileSize * 2
        }

        const player = new Sprite()
        player.name = "pan"
        player.scale.x = 2
        player.scale.y = 2
        player.pos = { x: 100, y: 100 }
        player.tileW = 16
        player.tileH = 16
        player.texture = game.textures.imgs.player
        player.speed = math.randf(0.9, 1.2)
        player.anims.add("walk", [0, 1, 2, 3].map(x => ({ x, y: 0 })), 0.07 * player.speed)
        player.anims.add("idle", [{ x: 0, y: 0 }], 0.15 * player.speed)
        player.anims.play("idle")

        const camera = new Camera(player, { w: 800, h: 600 }, { w: 1600, h: 600 });

        const bullets = new Container()

        function fireBullet(x, y, direction) {
            const bullet = new Sprite()
            bullet.scale.x = 2
            bullet.scale.y = 2
            bullet.pos = { x: x, y: y }
            bullet.texture = game.textures.imgs.bullet
            bullet.anchor.x = direction > 0 ? -16 : 16
            bullet.update = function (dt) {
                if (direction > 0)
                    this.pos.x -= 400 * dt
                else
                    this.pos.x += 400 * dt
            }
            bullets.add(bullet)
        }

        // Game state variables


        camera.add(tileMap)
        camera.add(player)
        camera.add(bullets)

        this.add(camera)

        // Keep references to things we need in "update"
        this.player = player
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
        let { game, player, bullets, bounds, lastShot, fireBullet } = this

        player.pos.x += game.controls.x * dt * 200
        player.pos.y += game.controls.y * dt * 200

        if (game.controls.x) {
            player.anims.play("walk")
            // Flip to correct direction
            player.scale.x = Math.sign(game.controls.x) * 2

            player.anchor.x = player.scale.x > 0 ? -16 : 16
        } else {
            player.anims.play("idle")
        }


        if (game.controls.action && t - lastShot > 0.30) {
            this.lastShot = t

            fireBullet(player.pos.x, player.pos.y, player.anchor.x)
        }

        // Destroy bullets when they go out of the screen
        bullets.children.forEach(bullet => {
            if (bullet.pos.x > 1600) {
                bullet.dead = true
            }
        })

        const { top, bottom, left, right } = bounds;
        player.pos.x = math.clamp(player.pos.x, left, right);
        player.pos.y = math.clamp(player.pos.y, top, bottom);
    }

}

export default GameScene