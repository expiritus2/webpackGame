import {Bitmap, Ticker} from '@createjs/easeljs';
import BG from '../assets/bg.jpg';

export default class Game {

    stage = null;
    bg1 = null;
    bg2 = null;

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
        this.createBackground();
    }

    createBackground(){
        this.bg1 = new Bitmap(BG);
        this.bg2 = new Bitmap(BG);
        this.bg2.x = 500;
    }

    update(){
        if(this.bg1.x === -500 || this.bg2.x === -500) {
            this.bg1.x = 500;
            this.bg2.x -= 10;
        }
        this.bg1.x -= 10
    }

    draw(){
        this.stage.addChild(this.bg1);
    }
}
