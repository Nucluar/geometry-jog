////@ts-check
export class player extends Phaser.GameObjects.Rectangle{
    constructor(scene, x, y) {
        super(scene, x, y, 32, 32, 0x00ff00);

        
        // set origin to middle of rectangle
        this.setOrigin(0.5);
        
        // add yourself to the scene
        this.scene.add.existing(this);
        
        // tell physics about yourself
        this.scene.physics.add.existing(this);
        this.body.collideWorldBounds = true;

        // set our intial scale      
        this.setScale(1);

        this.scene.input.on("pointerdown", () => this.jump(), this);

        this.space = this.scene.input.keyboard.add(
            Phaser.input.keyboard.keyCodes.SPACE
        );

       // this.jumpTween = undefined;

        this.jumpTween = this.scene.tweens.add({
            targets: this,
             duration: 1000,
             repeat: -1,
             angle: {from: 0, to: 360}
         })
    }

    update() {
        if(Phaser.input.keyboard.JustDown(this.space)) {
            this.jump();
        }else if ()
       
        }
     }

    jump() {
        if(!this.body.blocked.down) {
            // don't jump if we are not down
            return;
    
        }

        this.body.setVelocityY(-350);

        this.jumpTween.restart();

        //  this.jumpTween = this.scene.tweens.add({
        //     targets: this,
        //      duration: 1000,
        //      repeat: -1,
        //      angle: {from: 0, to: 360}
        //  })
    }
}
