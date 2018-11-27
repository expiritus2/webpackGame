import {Stage, Shape, Sprite, SpriteSheet, Ticker} from '@createjs/easeljs';
import './Game.css';

export default class Game {

    stage = null;
    circle = null;

    constructor(stage) {
        this.stage = stage;
    }

    run(){
        this.init();
        Ticker.addEventListener("tick", () => {
            this.update();
            this.draw();
            this.stage.update();
        })
    }

    init(){
        this.circle = new Shape();
        this.circle.graphics.beginFill("red").drawCircle(0, 0, 40);
        this.circle.x = this.circle.y = 50;

    }

    update(){
        this.circle.x += 10;
    }

    draw(){
        this.stage.addChild(this.circle);
    }
}
