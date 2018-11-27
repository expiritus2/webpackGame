import { Stage } from "@createjs/easeljs";
import Game from './components/Game/Game';

const stage = new Stage('canvasGame');
new Game(stage).run();
