class SceneMain extends Phaser.Scene {
    constructor() {
        super({ key: "SceneMain" });
    }
    preload() {
        this.load.image("(space-background)", "./assets/img/bg-space.jpg");
        // PLAYER SPRITES
        this.load.image("player-one", "./assets/img/playerships/player-one-ship.png");
        this.load.image("player-bullet", "./assets/img/bullets/player-bullet.png");
        // ENEMY SPRITES
        this.load.image("enemy-one", "./assets/img/enemyships/enemyship01.png");
        this.load.image("enemy-two", "./assets/img/enemyships/enemyship02.png");
        this.load.image("enemy-three", "./assets/img/enemyships/enemyship03.png");
        this.load.image("enemy-bullet", "./assets/img/bullets/enemy-bullet.png");

        // EXPLOSIONS SPRITES
        this.load.image("explosion-00", "./assets/img/explosions/regularExplosion00.png");
        this.load.image("explosion-01", "./assets/img/explosions/regularExplosion01.png");
        this.load.image("explosion-02", "./assets/img/explosions/regularExplosion02.png");
        this.load.image("explosion-03", "./assets/img/explosions/regularExplosion03.png");
        this.load.image("explosion-04", "./assets/img/explosions/regularExplosion04.png");
        this.load.image("explosion-05", "./assets/img/explosions/regularExplosion05.png");
        this.load.image("explosion-06", "./assets/img/explosions/regularExplosion06.png");
        this.load.image("explosion-07", "./assets/img/explosions/regularExplosion07.png");
        this.load.image("explosion-08", "./assets/img/explosions/regularExplosion08.png");

        // AUDIO FILES
        this.load.audio("explosion01", "assets/snd/enemy-explosion.wav");
        this.load.audio("explosion02", "assets/snd/player-explosion.wav");
        this.load.audio("laser-sound", "assets/snd/Laser_Shoot.wav");

        // this.load.image("(insert-imageKey)", "./assets/img/(insert-image)")


    }

    create() {
        // EXPLOSION ANIMATION
        this.anims.create({
            key: 'explosion',
            frames: [
                { key: 'explosion-00' },
                { key: 'explosion-01' },
                { key: 'explosion-02' },
                { key: 'explosion-03' },
                { key: 'explosion-04' },
                { key: 'explosion-05' },
                { key: 'explosion-06' },
                { key: 'explosion-07' },
                { key: 'explosion-08' }
            ],
            frameRate: 10,
            repeat: 1
        });

        // EXPLOSION SOUNDS
        this.sfx = {
            explosions: [
                this.sound.add("explosion01"),
                this.sound.add("explosion02")
            ],
            laser: this.sound.add("laser-sound")
        }

    }
}