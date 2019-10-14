class SceneMain extends Phaser.Scene {
    constructor() {
        super({ key: "SceneMain" });
    }
    preload() {
        this.load.image("(space-background)", "./assets/img/bg-space.jpg");
        // PLAYER SPRITES
        this.load.image("player-one", "./assets/img/playerships/player-one-ship.png");
        this.load.image("player-bullet", "./assets/img/bullets/player-bullet");
        // ENEMY SPRITES
        this.load.image("enemy-one", "./assets/img/enemyships/enemyship01.png");
        this.load.image("enemy-two", "./assets/img/enemyships/enemyship02.png");
        this.load.image("enemy-three", "./assets/img/enemyships/enemyship03.png");
        this.load.image("enemy-bullet", "./assets/img/bullets/enemy-bullet");
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
        this.load.audio("enemy-explosion", "assets/snd/enemy-explosion.wav");
        this.load.audio("player-explosion", "assets/snd/player-explosion.wav");
        this.load.audio("laser-sound", "assets/snd/Laser_Shoot.wav");

        // this.load.image("(insert-imageKey)", "./assets/img/(insert-image)")


    }

    create() {

    }
}