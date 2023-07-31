 kaboom({
    scale: 4,
    clearColor: [0, 0, 0],
    background: [ 0, 0, 0, ],
})
// https://0x72.itch.io/dungeontileset-ii
loadSpriteAtlas("/sprites/dungeo.png", {
    "hero": {
        "x": 128,
        "y": 196,
        "width": 144,
        "height": 28,
        "sliceX": 9,
        "anims": {
            "idle": {
                "from": 0,
                "to": 3,
                "speed": 3,
                "loop": true
            },
            "run": {
                "from": 4,
                "to": 7,
                "speed": 10,
                "loop": true
            },
            "hit": 8
        }
    },
    "ogre": {
        "x": 16,
        "y": 320,
        "width": 256,
        "height": 32,
        "sliceX": 8,
        "anims": {
            "idle": {
                "from": 0,
                "to": 3,
                "speed": 3,
                "loop": true
            },
            "run": {
                "from": 4,
                "to": 7,
                "speed": 10,
                "loop": true
            }
        }
    },
    "floor": {
        "x": 18,
        "y": 64,
        "width": 48,
        "height": 48,
        "sliceX": 3,
        "sliceY": 3
    },
    "doors": {
        "x":29,
        "y": 224,
        "width": 100,
        "height": 42,
        "sliceX": 2,
        
        "anims": {
            "dopen": {
                "from": 0,
                "to": 1,
                "speed": 20,
                "loop": false
            },
            "dclose": {
                "from": 1,
                "to": 0,
                "speed": 20,
                "loop": false
            }
        }
    },

    "chest": {
        "x": 304,
        "y": 304,
        "width": 48,
        "height": 16,
        "sliceX": 3,
        "anims": {
            "open": {
                "from": 0,
                "to": 2,
                "speed": 20,
                "loop": false
            },
            "close": {
                "from": 2,
                "to": 0,
                "speed": 20,
                "loop": false
            }
        }
    },
    "sword": {
        "x": 322,
        "y": 81,
        "width": 12,
        "height": 30
    },
    "wall": {
        "x": 16,
        "y": 16,
        "width": 16,
        "height": 16
    },
    "wall_top": {
        "x": 16,
        "y": 0,
        "width": 16,
        "height": 16
    },
    "wall_left": {
        "x": 16,
        "y": 128,
        "width": 16,
        "height": 16
    },
    "wall_right": {
        "x": 0,
        "y": 128,
        "width": 16,
        "height": 16
    },
    "wall_topleft": {
        "x": 32,
        "y": 128,
        "width": 16,
        "height": 16
    },
    "wall_topright": {
        "x": 48,
        "y": 128,
        "width": 16,
        "height": 16
    },
    "wall_botleft": {
        "x": 32,
        "y": 144,
        "width": 16,
        "height": 16
    },
    "wall_botright": {
        "x": 48,
        "y": 144,
        "width": 16,
        "height": 16
    },

})

// floor
addLevel([
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "                                            ",
    "                                            ",
    "                                            ",
    "                                            ",
    "                                            ",
    "                                            ",
    "                                            ",
    "                                            ",
    "                                            ",
    "                                            ",
    "                                            ",
    "                                            ",
    "                                            ",
    "                                            ",
    "                                            ",
    "                                            ",
    "                                            ",
    "                                            ",
    "                                            ",
    "                                            ",

],
{
    width: 16,
    height: 16,
    " ": () => [
        sprite("floor", { frame: ~~rand(0, 8) }),
    ],
})

// objects
const map = addLevel([
    "tttttttttttttttttttttttttttttttttttp ttttttt",
    "cwwwwwwwwwwwwwwwwdwwwwwwwwwwwwwwwww  wwwwwwd",
    "l                r                         r",
    "l                r                         r",
    "l                r                         r",
    "l                r                         r",
    "l                r                         r",
    "l                r                         r",
    "attttttt    tttttbttttttttttttttt  ttttttttb",
    "cwwwwwww    wwwwwdwwwwwwwwwwwwwww  wwwwwwwwd",
    "l                r                         r",
    "l             $  r                         r",
    "l                r                         r",
    "l                r                         r",
    "l  $             r                         r",
    "l                r                         r",
    "l                r                         r",
    "l                r                         r",
    "l                                          r",
    "l                                          r",
    "attttttttttttttttttttttttttttttttttttttttttb",
    "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
],
    {
        width: 16,
        height: 16,
        "$": () => [
            sprite("chest"),
            area(),
            solid(),
            { opened: false, },
            "chest",
        ], "p": () => [
            sprite("doors"),
            area(),
            solid(),
            { opened: false, },
            "doors",
        ],
        "a": () => [
            sprite("wall_botleft"),
            area({ width: 4 }),
            solid(),
        ],
        "b": () => [
            sprite("wall_botright"),
            area({ width: 4, offset: vec2(12, 0) }),
            solid(),
        ],
        "c": () => [
            sprite("wall_topleft"),
            area(),
            solid(),
        ],
        "d": () => [
            sprite("wall_topright"),
            area(),
            solid(),
        ],
        "w": () => [
            sprite("wall"),
            area(),
            solid(),
        ],
        "t": () => [
            sprite("wall_top"),
            area({ height: 4, offset: vec2(0, 12) }),
            solid(),
        ],
        "l": () => [
            sprite("wall_left"),
            area({ width: 4, }),
            solid(),
        ],
        "r": () => [
            sprite("wall_right"),
            area({ width: 4, offset: vec2(12, 0) }),
            solid(),
        ],
    })

const player = add([
    pos(map.getPos(2, 2)),
    sprite("hero", { anim: "idle" }),
    area({ width: 12, height: 12, offset: vec2(0, 6) }),
    solid(),
    origin("center"),
])


const ogre = add([
    sprite("ogre"),
    pos(map.getPos(4, 4)),
    origin("bot"),
    area({ scale: 0.5 }),
    solid(),
])

const sword = add([
    pos(),
    sprite("sword"),
    origin("bot"),
    rotate(0),
    follow(player, vec2(-4, 9)),
    spin(),
])

function spin() {
    let spinning = false
    return {
        id: "spin",
        update() {
            if (spinning) {
                this.angle += 1200 * dt()
                if (this.angle >= 360) {
                    this.angle = 0
                    spinning = false
                }
            }
        },
        spin() {
            spinning = true
        },
    }
}



onKeyPress("space", () => {
    let interacted = false
    every("chest", (c) => {
        if (player.isTouching(c)) {
            if (c.opened) {
                c.play("close")

                c.opened = false


            } else {

                c.play("open")
                c.opened = true

            }
            interacted = true
        }
    })
    every("doors", (d) => {
        if (player.isTouching(d)) {
            if (d.opened) {

                d.play("dclose")

                d.opened = false

            } else {

                d.play("dopen")
                d.opened = true
               
            }
            interacted = true
        }
    })
    if (!interacted) {
        sword.spin()
    }
})

const SPEED = 120

const dirs = {
    "left": LEFT,
    "right": RIGHT,
    "up": UP,
    "down": DOWN,
}


player.onUpdate(() => {
    camPos(player.pos)
})

onKeyDown("d", () => {
    player.flipX(false)
    sword.flipX(false)
    player.move(SPEED, 0)
    sword.follow.offset = vec2(-4, 9)
})

onKeyDown("a", () => {
    player.flipX(true)
    sword.flipX(true)
    player.move(-SPEED, 0)
    sword.follow.offset = vec2(4, 9)
})

onKeyDown("w", () => {
    player.move(0, -SPEED)
})

onKeyDown("s", () => {
    player.move(0, SPEED)
})

onKeyPress(["a", "d", "w", "s"], () => {
    player.play("run")
})

onKeyRelease(["a", "d", "w", "s"], () => {
    if (
        !isKeyDown("a")
        && !isKeyDown("d")
        && !isKeyDown("w")
        && !isKeyDown("s")
    ) {
        player.play("idle")
    }
})
