import { Stage } from "@createjs/easeljs";
import Game from './components/Game';

import classes from '../styles.css';

const stage = new Stage('canvasGame');
new Game(stage).run();
