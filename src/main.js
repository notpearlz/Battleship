import { GameBoard } from "./modules/gameBoard.js";
import { Player } from "./modules/player.js";
import { render } from "./modules/renderDOM.js";

const player1 = new Player();
const player2 = new Player();

const board1 = new GameBoard();
const board2 = new GameBoard();

board1.placeShip(0, 0);
render(board1, board2);
