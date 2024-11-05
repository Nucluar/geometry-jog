import { player } from "../../player.js/player";
import { Genrator } from "../../src/generatoe";

export class GameScene extends Phaser.Scene {
    constructor() {
        super({ Key: "game"});
    }

    preload() {
        // this will get called by Phaser
        // automatically when the scene loads
    }

    create() {
        //set background color
        this.cameras.main.setBackgroundColor(0x88ceeb);

this.Genrator = new Genrator(this);

        this.player = new Player()
    }

    update() {
        this.player.update();
    }
}
