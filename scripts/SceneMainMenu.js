class SceneMainMenu extends Phaser.Scene {
    constructor() {
        super({ key: "SceneMainMenu" });
    }
    preload() {
        this.load.image("play-button", "./assets/img/buttons/play-button.png");
        this.load.image("quit-button", "./assets/img/buttons/quit-button.png");

    }
    create() {
        this.scene.start("SceneMain");
    }
}