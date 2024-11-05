import { Cloud } from "../cloud";

export class Genrator {
    constructor(scene) {
        this.scene = scene;

        this.scene.time.delayCall(2000, () => this.Init(), undefined, this)
    }

    Init() {

    }

    genrateCloud() {
        new Cloud(this.scene);
        this.scene.time.delayCall(
            Phaser.Math.Between(2000, 3000),
            () => this.genrateCloud(),
            undefined,
            this
        );
    };
};