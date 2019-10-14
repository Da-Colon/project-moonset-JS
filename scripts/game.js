const config = {
    type: Phaser.AUTO,
    width: 620,
    height: 700,
    parent: "moonset-div",
    input: {
        gamepad: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
        extend: {
            player: null,
            healthpoints: null,
            reticle: null,
            moveKeys: null,
            playerBullets: null,
            enemyBullets: null,
            time: 0,
        }
    }
};

const game = new Phaser.Game(config);

function preload() {};

function create() {};

function update() {};