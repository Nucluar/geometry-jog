//// @ts-check
import { GameScene } from '../scenes/scenes/scene';
import './css/style.css'
import Phaser from `phaser`

/** @type { Phaser.Core.Config}*/
const config = {
width: 600,
height: 300,
scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    parent: "app",
    scene: [GameScene ],
    physics: {
        default: "arcade",
        arcade: {
            gravity: { x:0, y: 350 },
            debug: true,
        }
    }
};

const game = new Phaser.Game(config);
